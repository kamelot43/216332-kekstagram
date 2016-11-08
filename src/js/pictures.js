'use strict';
var Picture = require('./picture');
var connect = require('./load');
var gallery = require('./gallery');
var showPictures = (function() {
  var container = document.querySelector('.pictures');
  var filter = document.querySelector('.filters');
  var PAGE_SIZE = 12; //Размер страницы
  var pageNumber = 0;
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
      filter: hotels
    }, renderPictures); //параметр 3 -функция отрисовки фотографий;
  };
  //Делигирование
  var changeFilters = function(filterID) {
    container.innerHTML = ''; // Очиcтка HTML
    pageNumber = 0;
    loadHotels(filterID, pageNumber);
  };
  //Добавлен е обработчика событий(клика)на фильтры
  filter.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('filters-radio')) { //Проверка условия
      changeFilters(evt.target.id); //Передача параметром в функцию свойства id
    }
  });
})();
module.exports = showPictures;
