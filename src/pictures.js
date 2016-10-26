'use strict';

var filter = document.querySelector('.filters');
filter.classList.add('hidden');
var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;
var callbackName = '__jsonpCallback' + Date.now();
var DATA_BASE_URL = 'http://localhost:1507/api/pictures';

var getPictureElement = function(picture) {
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  var image = new Image(182, 182);
  image.onload = function() {
    pictureElement.querySelector('img').src = picture.url;
  };
  image.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  image.src = picture.url;
  return pictureElement;
};
var renderPictures = function(pictures) {
  pictures.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filter.classList.remove('hidden');
};
var connect = function(url, callback) {
  window[callbackName] = function(data) {
    callback(data);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};
connect(DATA_BASE_URL, renderPictures);
