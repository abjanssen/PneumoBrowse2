// Capital.js
;(function () {
  class MyPlugin {
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('capital', feature => {
        if (typeof feature !== 'string') return feature;

        // Step 1: Split the string by ","
        const parts = feature.split(",");

        // Step 2: Trim spaces from each part
        const trimmedParts = parts.map(part => part.trim());

        // Step 3 & 4: Test each part if it starts with "SPV_" or a capital letter
        const formattedParts = trimmedParts.map(part => {
          if (part.startsWith("SPV_") || part.startsWith("tRNA") || part.startsWith("tmRNA") || part.startsWith("ncRNA") || part.startsWith("mRNA") || part.startsWith("rRNA") || /^[A-Z]/.test(part)) {
            // If it starts with "SPV_" or a capital letter, return it normally
            return part;
          } else {
            // If it doesn't, capitalize the first letter
            return part.charAt(0).toUpperCase() + part.slice(1);
          }
        });

        // Step 5: Join the formatted parts with ", " as delimiter
        return formattedParts.join(", ");
      });
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginCapital = {
    default: MyPlugin,
  };
})();
