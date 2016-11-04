'use strict';
var getPictureElement = require('./picture');
var connect = require('./load');
var gallery = require('./gallery');

var showPictures = (function() {
  var container = document.querySelector('.pictures');
  var filter = document.querySelector('.filters');
  filter.classList.add('hidden');
  var DATA_BASE_URL = 'http://localhost:1507/api/pictures';

  var renderPictures = function(pictures) {
    pictures.forEach(function(picture, index) {
      container.appendChild(getPictureElement(picture, index));
    });
    filter.classList.remove('hidden');
    gallery.setPictures(pictures);
  };
  connect(DATA_BASE_URL, renderPictures);
})();
module.exports = showPictures;
