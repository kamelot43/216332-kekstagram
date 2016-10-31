'use strict';
var connect = function(url, callback) {
  //Набор переменных для работы с модулем load.js
  var callbackName = '__jsonpCallback' + Date.now();
  window[callbackName] = function(data) {
    callback(data);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};
module.exports = connect;
