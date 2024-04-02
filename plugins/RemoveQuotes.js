// RemoveQuotes.js
;(function () {
  class MyPlugin {
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('removequotes', feature => {
        return feature.replace(/"/g, ""); 
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginRemoveQuotes = {
    default: MyPlugin,
  }
})()