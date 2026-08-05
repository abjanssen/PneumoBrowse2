/* eslint-disable no-restricted-globals */
;(function () {
  class URLNavigationPlugin {
    name = 'URLNavigationPlugin'

    install(pluginManager) {
      /* do nothing */
    }

    configure(pluginManager) {
      const { when } = pluginManager.jbrequire('mobx')
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
      const trixIndexCache = new Map()
      const resolveUri = (uri, baseUrl) => new URL(uri, baseUrl).href
      const getConfigUrl = () => {
        const pageUrl = new URL(window.location.href)
        const configParam = pageUrl.searchParams.get('config') || 'config.json'
        return resolveUri(configParam, pageUrl.href)
      }
      const getTrixIxUrl = async searchstrain => {
        const configUrl = getConfigUrl()
        const response = await fetch(configUrl)
        if (!response.ok) {
          throw new Error(
            `Could not load JBrowse config "${configUrl}": HTTP ${response.status}`,
          )
        }

        const config = await response.json()

        const track = config.tracks?.find(
          candidate =>
            candidate.assemblyNames?.includes(searchstrain) &&
            candidate.textSearching?.textSearchAdapter?.type ===
              'TrixTextSearchAdapter',
        )

        const perTrackUri =
          track?.textSearching?.textSearchAdapter?.ixFilePath?.uri ||
          track?.textSearching?.textSearchAdapter?.uri

        if (perTrackUri) {
          return resolveUri(perTrackUri, configUrl)
        }

        const aggregate = config.aggregateTextSearchAdapters?.find(
          candidate =>
            candidate.type === 'TrixTextSearchAdapter' &&
            candidate.assemblyNames?.includes(searchstrain),
        )

        const aggregateUri =
          aggregate?.ixFilePath?.uri || aggregate?.uri

        if (aggregateUri) {
          return resolveUri(aggregateUri, configUrl)
        }

        throw new Error(
          `No Trix text-search index configured for assembly "${searchstrain}"`,
        )
      }

      const loadTrixIndex = async ixUrl => {
        if (!trixIndexCache.has(ixUrl)) {
          trixIndexCache.set(
            ixUrl,
            fetch(ixUrl).then(async response => {
              if (!response.ok) {
                throw new Error(
                  `Could not load Trix index "${ixUrl}": HTTP ${response.status}`,
                )
              }

              return response.text()
            }),
          )
        }

        return trixIndexCache.get(ixUrl)
      }

      const trixKey = value => String(value).trim().toLowerCase()

      /*
       * Strain/isolate names often contain punctuation ("/", "-") that
       * users omit when typing, e.g.:
       *
       *   "4954-98"     typed as "495498"
       *   "LILPNEUHC19F" typed as "LILPNEUHC19F" but stored as "LILPNEUHC 19F"
       *   "PJ755/1"     typed as "PJ7551" or "PJ755-1"
       *   "Spn1439-106" typed as "Spn1439106"
       *   "TL7/1993"    typed as "TL71993" or "TL7-1993"
       *
       * Stripping everything but letters/digits before comparing makes all
       * of the above equivalent, regardless of which punctuation (if any)
       * the user includes.
       */
      const normalizeKey = value =>
        trixKey(value).replace(/[^a-z0-9]/g, '')

      /*
       * Same punctuation-stripping as normalizeKey(), but preserves the
       * original case. Used only for building the uniprot_map_*.json
       * filename, since the generator script that produces those files
       * strips punctuation without lowercasing (e.g. "M264-3" ->
       * "M2643", not "m2643").
       */
      const stripPunctuationPreserveCase = value =>
        String(value).trim().replace(/[^a-zA-Z0-9]/g, '')

      const uniprotMapCache = new Map()

      /*
       * UniProt accessions are deliberately kept out of the main Trix
       * index, so they never show up in JBrowse's own search box. Instead,
       * for each assembly we look for a TSV file at
       * "trix/uniprot_map/uniprot_locus_map_<assembly, punctuation
       * stripped but case preserved>.tsv" (relative to config.json), with
       * columns:
       *
       *   strain  locus_tag  uniprot  product
       *
       * e.g. assembly "M264-3" ->
       * "trix/uniprot_map/uniprot_locus_map_M2643.tsv". This matches the
       * naming produced by the accompanying map-generation script, which
       * strips "/" and "-" from the assembly name but does not change
       * letter case. Only the "locus_tag" and "uniprot" columns are used
       * here; "product" is ignored for lookup purposes.
       *
       * This plugin loads that file only for its own URL-driven lookups,
       * translating a UniProt accession to its locus tag before handing
       * off to the normal locus-tag/Trix lookup logic.
       */
      const loadUniprotMap = async searchstrain => {
        const normalizedStrain = normalizeKey(searchstrain)

        if (!uniprotMapCache.has(normalizedStrain)) {
          const configUrl = getConfigUrl()
          const filenameStrain = stripPunctuationPreserveCase(searchstrain)
          const mapUrl = resolveUri(
            `trix/uniprot_map/uniprot_locus_map_${filenameStrain}.tsv`,
            configUrl,
          )

          uniprotMapCache.set(
            normalizedStrain,
            fetch(mapUrl)
              .then(async response => {
                if (!response.ok) {
                  return null
                }

                return response.text()
              })
              .then(tsvText => {
                if (typeof tsvText !== 'string') {
                  return null
                }

                const map = new Map()
                const lines = tsvText.split(/\r?\n/)

                // First line is the header (strain, locus_tag, uniprot,
                // product); skip it explicitly rather than assuming a
                // fixed line count, in case of blank trailing lines.
                lines.forEach(line => {
                  if (!line || line.startsWith('strain\t')) {
                    return
                  }

                  const columns = line.split('\t')
                  const locus = columns[1]
                  const uniprot = columns[2]

                  if (uniprot && locus) {
                    map.set(normalizeKey(uniprot), locus)
                  }
                })

                return map
              })
              .catch(() => null),
          )
        }

        return uniprotMapCache.get(normalizedStrain)
      }

      /*
       * If query matches a known UniProt accession for this assembly,
       * translate it to the corresponding locus tag. Otherwise, return the
       * query unchanged.
       */
      const resolveUniprotQuery = async (query, searchstrain) => {
        const map = await loadUniprotMap(searchstrain)
        const locus = map?.get(normalizeKey(query))

        return locus || query
      }

      const findTrixLocation = async (query, searchstrain) => {
        const ixUrl = await getTrixIxUrl(searchstrain)
        const ixText = await loadTrixIndex(ixUrl)
        const wantedKey = trixKey(query)
        const wantedNormalizedKey = normalizeKey(query)

        const lines = ixText.split(/\r?\n/)

        // First, try an exact (case-insensitive) match against the stored key.
        let line = lines.find(candidate => {
          const separator = candidate.indexOf(' ')
          return (
            separator !== -1 &&
            candidate.slice(0, separator).toLowerCase() === wantedKey
          )
        })

        // Fall back to a punctuation-insensitive match, e.g. "495498"
        // matching a stored key of "4954-98".
        if (!line) {
          line = lines.find(candidate => {
            const separator = candidate.indexOf(' ')
            return (
              separator !== -1 &&
              normalizeKey(candidate.slice(0, separator)) ===
                wantedNormalizedKey
            )
          })
        }

        if (!line) {
          throw new Error(
            `No exact Trix result found for "${query}" in assembly "${searchstrain}"`,
          )
        }

        const locationMatch = line.match(/\["([^"\]]+)"\|/)
        if (!locationMatch) {
          throw new Error(
            `Trix result for "${query}" has no readable genomic location`,
          )
        }

        const location = decodeURIComponent(locationMatch[1])
        return location
      }

      const waitForPaint = () =>
        new Promise(resolve => {
          requestAnimationFrame(() => {
            requestAnimationFrame(resolve)
          })
        })

      const escapeAttributeValue = value =>
        String(value).replaceAll('\\', '\\\\').replaceAll('"', '\\"')

      const escapeCssId = value => {
        if (typeof CSS !== 'undefined' && CSS.escape) {
          return CSS.escape(String(value))
        }

        return String(value).replace(
          /[^a-zA-Z0-9_-]/g,
          character =>
            `\\${character.codePointAt(0).toString(16)} `,
        )
      }

      const findViewElement = view => {
        const id = String(view.id)
        const escapedAttributeId = escapeAttributeValue(id)
        const escapedCssId = escapeCssId(id)

        const selectors = [
          `#${escapedCssId}`,
          `[data-view-id="${escapedAttributeId}"]`,
          `[data-testid="view-${escapedAttributeId}"]`,
          `[data-testid="${escapedAttributeId}"]`,
          `[data-id="${escapedAttributeId}"]`,
        ]

        for (const selector of selectors) {
          const element = document.querySelector(selector)
          if (element) {
            return element
          }
        }

        const label = view.displayName || view.name
        if (label) {
          const possibleLabels = document.querySelectorAll(
            'h1, h2, h3, h4, h5, h6, [role="heading"], button, span, div',
          )

          for (const element of possibleLabels) {
            if (element.textContent?.trim() === label) {
              return element
            }
          }
        }

        return undefined
      }

      const scrollViewIntoCentre = async view => {
        if (typeof document === 'undefined') {
          return false
        }

        for (let attempt = 0; attempt < 20; attempt += 1) {
          await waitForPaint()

          const element = findViewElement(view)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            })

            return true
          }

          await sleep(100)
        }

        return false
      }
      ;(async () => {
        try {
          await when(() => pluginManager.rootModel?.session)

          const session = pluginManager.rootModel.session

          const url = new URL(window.location.href)
          
          const uniprotinput = url.searchParams.get("uniprotsearch");
          let searchstring;
          let searchstrain;
          if (uniprotinput) {
              [searchstrain, searchstring] = uniprotinput.split(":");
          } else {
              searchstring = url.searchParams.get("searchstring");
              searchstrain = url.searchParams.get("searchstrain");
          }

          if (!searchstring && !searchstrain) {
            return
          }

          if (!searchstring || !searchstrain) {
            const missingParam = searchstring
              ? 'searchstrain'
              : 'searchstring'
            const message = `"${missingParam}" must also be specified when using the URL navigation parameters`

            session.notify?.(message, 'error')
            return
          }

          await when(() => session.assemblyManager.assemblies.length > 0)

          // Resolve the (possibly de-punctuated/mis-cased) searchstrain
          // param against the actual configured assembly names, e.g.
          // "m2643" -> "M264-3".
          const resolvedStrain =
            session.assemblyManager.assemblies
              .map(assembly => assembly.name)
              .find(name => normalizeKey(name) === normalizeKey(searchstrain)) ||
            searchstrain

          await when(() => session.views.length > 0)

          const view = session.views.find(
            candidate =>
              candidate.type === 'LinearGenomeView' &&
              candidate.assemblyNames?.includes(resolvedStrain),
          )

          if (!view) {
            const message =
              `No LinearGenomeView found for assembly "${resolvedStrain}"`

            session.notify?.(message, 'error')
            return
          }

          session.views.forEach(candidate => {
            if (candidate.type !== 'LinearGenomeView') {
              return
            }

            const shouldBeMinimized = candidate.id !== view.id
            if (candidate.minimized !== shouldBeMinimized) {
              candidate.setMinimized?.(shouldBeMinimized)
            }
          })

          if (view.minimized) {
            view.setMinimized?.(false)
          }

          if (session.focusedViewId !== view.id) {
            if (typeof session.setFocusedViewId === 'function') {
              session.setFocusedViewId(view.id)
            }
          }

          // If the hierarchical track selector panel is already open, make
          // sure it's showing the track list for the assembly/view being
          // navigated to, rather than whatever view it was last opened for.
          // We don't force it open if it's currently closed.
          const existingTrackSelector = session.widgets?.get?.(
            'hierarchicalTrackSelector',
          )

          if (existingTrackSelector && existingTrackSelector.view !== view) {
            if (typeof view.activateTrackSelector === 'function') {
              view.activateTrackSelector()
            }
          }

          await when(() => view.initialized)

          await when(() => {
            const assembly =
              session.assemblyManager.get(resolvedStrain)

            return Boolean(assembly?.initialized)
          })

          await scrollViewIntoCentre(view)

          // If searchstring is a known UniProt accession for this assembly,
          // translate it to its locus tag before navigating/searching.
          const resolvedSearchstring = await resolveUniprotQuery(
            searchstring,
            resolvedStrain,
          )

          try {
            await view.navToLocString(
              resolvedSearchstring,
              resolvedStrain,
              0.2
            )
          } catch (locationError) {
            try {
              const trixLocation = await findTrixLocation(
                resolvedSearchstring,
                resolvedStrain,
              )

              await view.navToLocString(
                trixLocation,
                resolvedStrain,
                0.2
              )
            } catch (searchError) {
              session.notify?.(`${searchError}`, 'error')
              return
            }
          }
          await scrollViewIntoCentre(view)
          url.searchParams.delete('searchstring')
          url.searchParams.delete('searchstrain')

          window.history.replaceState(null, '', url)
        } catch (error) {
          const session = pluginManager.rootModel?.session
          session?.notify?.(
            `URLNavigationPlugin failed: ${error}`,
            'error',
          )
        }
      })()
    }
  }
  ;(typeof self !== 'undefined' ? self : window)
    .JBrowsePluginURLNavigationPlugin = {
    default: URLNavigationPlugin,
  }
})()