'use strict';
var Picture = require('./picture');
var connect = require('./load');
var gallery = require('./gallery');
var showPictures = (function() {
  var container = document.querySelector('.pictures');
  var filter = document.querySelector('.filters');
  var footer = document.querySelector('footer');
  var PAGE_SIZE = 12; //Размер страницы
  var pageNumber = 0;
  var activeFilter = 'filter-popular';
  filter.classList.add('hidden');
  var DATA_BASE_URL = '/api/pictures';
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
      filter: hotels
    }, renderPictures); //параметр 3 -функция отрисовки фотографий;
  };
  //Делигирование
  //Добавление обработчика событий(клика)на фильтры
  filter.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('filters-radio')) { //Проверка условия
      changeFilters(evt.target.id); //Передача параметром в функцию свойства id
    }
  });
  var changeFilters = function(filterID) {
    container.innerHTML = '';// Очиcтка HTML
    activeFilter = filterID;
    pageNumber = 0;
    loadHotels(filterID, pageNumber);
  };
  //Обработчик scroll
  var lastCall = Date.now();
  window.addEventListener('scroll', function() {
    var THROTTLE_TIMEOUT = 100;
    var GAP = 100;
    if (Date.now() - lastCall >= THROTTLE_TIMEOUT) {
      if (footer.getBoundingClientRect().bottom - window.innerHeight <= GAP) {
        loadHotels(activeFilter, ++pageNumber);
      }
      lastCall = Date.now();
    }
  });
  changeFilters(activeFilter);
})();
module.exports = showPictures;
