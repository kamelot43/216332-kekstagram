'use strict';
(function() {
  var getPictureElement = require('./review');
  var connect = require('./load');
  var filter = document.querySelector('.filters');
  filter.classList.add('hidden');
  var DATA_BASE_URL = 'http://localhost:1507/api/pictures';

  var renderPictures = function(pictures) {
    pictures.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
    });
    filter.classList.remove('hidden');
  };
  connect(DATA_BASE_URL, renderPictures);
})();
