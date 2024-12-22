// ReplaceSpaces.js
;(function () {
  class MyPlugin {
    name = 'TextFormattingPlugin'
    version = 'SpacesFormatting'
    
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('replacespaces', feature => {
        return feature.replace(/ /g, "%20"); 
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginReplaceSpaces = {
    default: MyPlugin,
  }
})()