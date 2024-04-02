// ReplaceUnderslashCapitalize.js
;(function () {
  class MyPlugin {
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('replaceuc', feature => {
          const replacedFeature = feature.replace(/_/g, ' ');
          return replacedFeature.charAt(0).toUpperCase() + replacedFeature.slice(1);
//        return feature.replace(/_/g, ' ').charAt(0).toUpperCase() + feature.slice(1); 
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginReplaceUnderslashCapitalize = {
    default: MyPlugin,
  }
})()