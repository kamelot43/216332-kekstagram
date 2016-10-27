'use strict';
module.exports = (function () {
//Набор переменных для работы с модулем load.js
var callbackName = '__jsonpCallback' + Date.now();
var DATA_BASE_URL = 'http://localhost:1507/api/pictures';

var connect = function(url, callback) {
  window[callbackName] = function(data) {
    callback(data);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
})();
