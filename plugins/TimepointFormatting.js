// TimepointFormatting.js
;(function () {
  class MyPlugin {
    name = 'TextFormattingPlugin'
    version = 'TimepointFormatting'
    
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('formattimepoint', feature => {
        return feature.replace(/_generations/g, ' generations'); 
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginTimepointFormatting = {
    default: MyPlugin,
  }
})()