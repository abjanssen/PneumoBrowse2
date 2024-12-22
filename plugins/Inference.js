// Inference.js
;(function () {
  class MyPlugin {
    name = 'DataFormattingPlugin'
    version = 'InferenceFormatting'
      
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('inference', feature => {    
      if (feature.includes("COORDINATES:")) {
        // Replace "COORDINATES:" with an empty string
        return feature.replace("COORDINATES:", "Coordinates:");
    } else {
        // If "COORDINATES:" is not found, return the input string as is
        return feature;
    }
      });
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginInference = {
    default: MyPlugin,
  };
})();