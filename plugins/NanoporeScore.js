// NanoporeScore.js
;(function () {
  class MyPlugin {
    install() {}
    configure(pluginManager) {
      pluginManager.jexl.addFunction('nanoscore', feature => {
       return "Coverage: " + feature;
      })
    }
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginNanoporeScore = {
    default: MyPlugin,
  }
})()