// FoldEnriched.js
;(function () {
  class MyPlugin {
          name = 'DataFormattingPlugin'
          version = 'FoldEnrichedFormatting'
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('foldenriched', feature => {
       return "Fold Enriched: " + feature;
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginFoldEnriched = {
    default: MyPlugin,
  }
})()