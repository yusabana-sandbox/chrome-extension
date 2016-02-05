'use strict';

(function() {
  class Background {
    constructor() {
      this.assignEventHandlers();
    }

    assignEventHandlers() {
    }

    getServerUrl() {
      return 'http://backend.server.name';
    }

    // ajaxアクセスする場合
    loadHogeData(callbacks) {
      let url = this.getServerUrl() + 'ajax/get_***';
      fetch(url).then((response) => {
        callbacks.onSuccess(response);
      });
    }

    // 何かしらの設定
    getHogeConfig() {
      let value = localStorage.hoge;
      if (value) {
        return value;
      } else {
        return '初期値の値';
      }
    }
    setHogeConfig(value) {
      localStorage.hoge = value;
    }
  }

  window.bg = new Background();
})();


// バッジのテキスト
chrome.browserAction.setBadgeText({text: 'Alo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
console.log(chrome.runtime.getManifest().name);
