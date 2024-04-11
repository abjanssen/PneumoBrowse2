// ReplaceUnderslashCapitalize.js
;(function () {
  class MyPlugin {
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('replaceuc', feature => {
        const replacedFeature = feature.replace(/_/g, ' ');
        if (
          replacedFeature.startsWith("SPV_") || 
          replacedFeature.startsWith("tRNA") || 
          replacedFeature.startsWith("tmRNA") || 
          replacedFeature.startsWith("mRNA") ||
          replacedFeature.startsWith("ncRNA") || 
          replacedFeature.startsWith("rRNA") || 
          /^[A-Z]/.test(replacedFeature)
        ) {
          // If it starts with "SPV_" or a capital letter, return it normally
          return replacedFeature;
        } else {
          // If it doesn't, capitalize the first letter
          return replacedFeature.charAt(0).toUpperCase() + replacedFeature.slice(1);
        }
      });
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginReplaceUnderslashCapitalize = {
    default: MyPlugin,
  };
})();
