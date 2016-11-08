'use strict';
var connect = function(url, params, callback) {
  //Набор переменных для работы с модулем load.js
  //Добавление нового метода отправки запроса на сервер
  var xhr = new XMLHttpRequest();
  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    callback(loadedData);
  };
  xhr.open('GET', url + '?filter=' + params.filter + '&from=' + params.from + '&to=' + params.to);
  xhr.send();
};
module.exports = connect;
