// RemoveCOG.js
;(function () {
  class MyPlugin {
    name = 'TextFormattingPlugin'
    version = 'COGFormatting'
    
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('removecog', feature => {
        return feature.replace(/COG:/g, ""); 
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginRemoveCOG = {
    default: MyPlugin,
  }
})()