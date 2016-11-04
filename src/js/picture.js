'use strict';
var gallery = require('./gallery');
var getPictureElement = function(picture, index) {
  //Набор переменных для работы с модулем review.js
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  var image = new Image(182, 182);
  image.src = picture.url;
  image.onload = function() {
    pictureElement.querySelector('img').src = picture.url;
  };
  image.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  pictureElement.onclick = function(event) {
    gallery.show(index);
    event.preventDefault();
  };
  return pictureElement;
};
module.exports = getPictureElement;
