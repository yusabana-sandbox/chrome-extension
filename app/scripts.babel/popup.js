'use strict';

console.log('\'Allo \'Allo! Popup');

(function() {
  class Popup {
    constructor() {
      window.addEventListener('load', (evt) => {
        this.start();
      });
    }
    start() {
      this.assignMessages();
      this.assignEventHandlers();
    }
    assignMessages() {
      let hash = {
        'popupHoge': 'popupHoge'
        // ....
      };

      for (var key in hash) {
        document.querySelector('#hoge').innerHTML = chrome.i18n.getMessage(hash[key]);
      }
    }
    assignEventHandlers() {
      document.querySelector('#hoge').addEventListener('click', (evt) => {
        this.onClickHoge(evt);
      });
    }
    onClickHoge(evt) {
      chrome.runtime.getBackgroundPage((backgroundPage) => {
        // 設定値を取得
        let bg = backgroundPage.bg;
        let hogeConfig = bg.getHogeConfig();

        // ajax通信
        bg.loadHogeData({
          onSuccess: (response) => { console.log(hogeConfig); /* ... */ }
        });
      });
    }
  }

  new Popup();
})();
