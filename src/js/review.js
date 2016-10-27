'use strict';
module.exports = (function() {
//Набор переменных для работы с модулем review.js
  var container = document.querySelector('.pictures');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;

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
 })();
