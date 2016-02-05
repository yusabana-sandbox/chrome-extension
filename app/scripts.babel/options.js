'use strict';

(function() {
  class Options {
    constructor() {
      window.addEventListener('load', (evt) => {
        this.start();
      });
    }

    start() {
      this.assignMessages();
      this.assignEventHandlers();
      this.restoreConfigurations();
    }

    assignMessages() {
      let hash = {
        'optHoge': 'optHoge'
        // ...
      };
      for (var key in hash) {
        document.querySelector('#' + key).innerHTML = chrome.i18n.getMessage(hash[key]);
      }
    }

    assignEventHandlers() {
      document.querySelector('#hoge').addEventListener('click', (evt) => {
        this.onClickHoge(evt);
      });
    }

    restoreConfigurations() {
      chrome.runtime.getBackgroundPage((backgroundPage) => {
        let bg = backgroundPage.bg;
        document.querySelector('#hoge').value = bg.getHogeConfig();
      });
    }

    onClickHoge(evt) {
      chrome.runtime.getBackgroundPage((backgroundPage) => {
        let bg = backgroundPage.bg;
        let value = document.querySelector('#hoge').value;
        console.log('ぐっどAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBB');

        bg.setHogeConfig(value);
      });
    }
  }

  new Options();
})();
