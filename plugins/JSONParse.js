// JSONParse.js
;(function () {
  class MyPlugin {
    name = 'DataFormattingPlugin'
    version = 'JSONParseFormatting'

    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('jsonparse', feature => {
        return JSON.parse(feature);
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginJSONParse = {
    default: MyPlugin,
  }
})()