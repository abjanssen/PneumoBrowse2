// sessionNamePlugin.js
;(function () {
  class SessionNamePlugin {
    name = 'SessionNamePlugin'
            
    install() {}

    configure(pluginManager) {
      // Listen for when a session is created or loaded
      if (pluginManager.rootModel) {
        // Watch for session changes using MobX reaction or similar
        pluginManager.addToExtensionPoint('Core-extendPluginManager', {
          name: 'SessionNamePlugin',
          sessionLoaded: (session) => {
            this.updateSessionName(session)
          },
        })

        // Also try direct session checking after a delay
        const checkSession = setInterval(() => {
          const session = pluginManager.rootModel?.session
          if (session) {
            clearInterval(checkSession)
            this.updateSessionName(session)
          }
        }, 10)
      }
    }

    updateSessionName(session) {
      if (!session) return

      const originalName = session.name || ''
      
      // Extract app name and version from original session name
      const match = originalName.match(/^(.+?)\s*\(v([\d.]+)\)/)
      
      if (match) {
        const appName = match[1]
        const version = match[2]
        const newSessionName = `${appName} (v${version})`

        if (typeof session.setName === 'function') {
          session.setName(newSessionName)
        } else {
          session.name = newSessionName
        }
      }
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginSessionNamePlugin = {
    default: SessionNamePlugin,
  }
})()