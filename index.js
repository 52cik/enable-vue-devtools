// ==UserScript==
// @name         Enable Vue.js devtools
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  强制启用 Vue.js devtools 开发者工具
// @author       楼教主
// @match        *://*/*
// @updateURL    https://raw.githubusercontent.com/52cik/enable-vue-devtools/master/index.js
// @downloadURL  https://raw.githubusercontent.com/52cik/enable-vue-devtools/master/index.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
  if (!window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    return;
  }

  let Vue = window.Vue;

  if (!Vue) {
    Vue = document.getElementById('app').__vue__.constructor.super;
  }

  if (!Vue) {
    // 遍历 dom 读取可能的 vue 实例
    return;
  }

  Vue.config.devtools = true;
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
})();
