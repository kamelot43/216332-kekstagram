'use strict';
var Picture = require('./picture');
var connect = require('./load');
var gallery = require('./gallery');
var showPictures = (function() {
  var container = document.querySelector('.pictures');
  var filter = document.querySelector('.filters');
  var PAGE_SIZE = 12; //Размер страницы
  filter.classList.add('hidden');
  var DATA_BASE_URL = 'http://localhost:1507/api/pictures';
  var renderPictures = function(pictures) {
    pictures.forEach(function(picture, index) {
      var pictureElement = new Picture(picture, index);
      container.appendChild((pictureElement.element));
    });
    filter.classList.remove('hidden');
    gallery.setPictures(pictures);
  };
  //Создание обновленного метода connect,который принимет на вход параметры:
  var loadHotels = function(hotels, page) { //page -номер страницы;
    connect(DATA_BASE_URL, { //параметр 1 - адрес;
      from: page * PAGE_SIZE, //параметр 2 - объект со свойствами from и to, в которых записаны индексы первой и последней фотографии блока;
      to: page * PAGE_SIZE + PAGE_SIZE,
      filter: filter
    }, renderPictures); //параметр 3 -функция отрисовки фотографий;
  };

})();
module.exports = showPictures;
