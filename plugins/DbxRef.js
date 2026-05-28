// Takes one or more DB:CODE strings (or arrays of them) and a set of spec objects,
// and returns a flat array of HTML anchor tags — one per matched (database, code) pair.
//
// Each input string is parsed on the first colon: "EC:1.1.1.1" → DB=EC, code=1.1.1.1
// Multiple codes for the same DB can be comma-separated: "GO:0008150,0005575"
//
// Each spec must supply:
//   db  — the database prefix to match (case-insensitive)
//   url — base URL; use {} as a placeholder for the code, or omit to append the code directly
//
// Example:
//   dbxref(
//     ['InterPro:' + feature.interpro, 'EC:' + feature.ec_code, 'GO:' + feature.go],
//     { db: 'InterPro', url: 'https://www.ebi.ac.uk/interpro/entry/InterPro/' },
//     { db: 'EC',       url: 'https://www.enzyme-database.org/advquery.php?string1={}&field1=es' },
//     { db: 'GO',       url: 'https://amigo.geneontology.org/amigo/term/{}' }
//   )
//   → ['<a href="...">InterPro: IPR000001</a>', '<a href="...">GO: 0008150</a>', ...]

;(function () {
  class MyPlugin {
    name = 'DataFormattingPlugin'
    version = 'DatabaseCrossReferencing'
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('dbxref', (...args) => {
        // -------- SPLIT INPUTS FROM SPECS --------
        const inputs = args.filter(a => typeof a === 'string' || Array.isArray(a))
        const specs  = args.filter(a => a !== null && typeof a === 'object' && !Array.isArray(a))
        // -------- INVALID CODE VALUES --------
        const isInvalid = val => !val || val === 'null' || val === 'undefined' || val === '.'
        // -------- PARSE ALL INPUTS --------
        const groups = {}
        const parseEntry = entry => {
          // split on both %2C and plain commas
          const segments = entry.split(/%2C|,/).filter(Boolean)
          if (!segments.length) return
          const colonIdx = segments[0].indexOf(':')
          if (colonIdx === -1) return
          const db = segments[0].slice(0, colonIdx).toUpperCase()
          if (!db) return
          const codes = [
            segments[0].slice(colonIdx + 1), // code from first segment
            ...segments.slice(1)              // bare codes from remaining segments
          ].filter(code => !isInvalid(code))
          if (!codes.length) return
          if (!groups[db]) groups[db] = []
          codes.forEach(code => groups[db].push(code))
        }
        inputs.forEach(input => {
          if (Array.isArray(input)) {
            input.forEach(entry => parseEntry(entry))
          } else {
            parseEntry(input)
          }
        })
        // -------- LINK BUILDER --------
        const buildLinks = links => {
          if (!links.length) return []
          return links.map(({ label, url }) => `<a href="${url}" target="_blank">${label}</a>`)
        }
        // -------- PROCESS SPECS --------
        return specs
          .flatMap(spec => {
            const db = (spec.db ?? '').toUpperCase()
            const baseUrl = spec.url ?? ''
            if (!db || !baseUrl) return []
            const codes = groups[db]
            if (!codes?.length) return []
            const links = codes.map(code => ({
              label: `${spec.db}: ${code}`,
              url: baseUrl.includes('{}')
                ? baseUrl.replace('{}', encodeURIComponent(code))
                : `${baseUrl}${encodeURIComponent(code)}`,
            }))
            return buildLinks(links)
          })
      })
    }
  }
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginDbxRef = {
    default: MyPlugin,
  }
})()