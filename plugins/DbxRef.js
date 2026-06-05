
;(function () {
  class MyPlugin {
    name = 'DataFormattingPlugin'
    version = 'DatabaseCrossReferencing'
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('dbxref', (...args) => {
        const inputs = args.filter(a => typeof a === 'string' || Array.isArray(a))
        const specs  = args.filter(a => a !== null && typeof a === 'object' && !Array.isArray(a))
        const isInvalid = val => !val || val === 'null' || val === 'undefined' || val === '.'
        const groups = {}
        const parseEntry = entry => {
          const segments = entry.split(/%2C|,/).filter(Boolean)
          if (!segments.length) return
          const colonIdx = segments[0].indexOf(':')
          if (colonIdx === -1) return
          const db = segments[0].slice(0, colonIdx).toUpperCase()
          if (!db) return
          const codes = [
            segments[0].slice(colonIdx + 1), 
            ...segments.slice(1)              
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
        const buildLinks = links => {
          if (!links.length) return []
          return links.map(({ label, url }) => `<a href="${url}" target="_blank">${label}</a>`)
        }
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