'use strict';
  var getPictureElement = function(picture) {
    //Набор переменных для работы с модулем review.js
    var container = document.querySelector('.pictures');
    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;
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
module.exports = getPictureElement;
