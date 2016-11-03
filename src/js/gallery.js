'use strict';
//////////////////////////////////////////////////////////////////////
//ФУНКЦИЯ-КОНСТРУКТОР GALLERY И ЕЕ ОБЪЕКТ ПРОТОТИП
var Gallery = function() {
  this.activePicture = 0;
  this.elementPhoto = document.querySelector('.gallery-overlay');//элемент фотогалереи с классом
  this.closeGallery = document.querySelector('.gallery-overlay-close');//элемент закрытия галереи с классом
  this.overlayImage = document.querySelector('.gallery-overlay-image');//фотография с классом
  this.galleryLikes = document.querySelector('.likes-count');
  this.galleryComments = document.querySelector('.comments-count');
};
/////////////////////////////////////////////////////////////////////
//ДОБАВЛЕНИЕ МЕТОДА setPictures
Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

////////////////////////////////////////////////////////////////////
//ДОБАВЛЕНИЕ МЕТОДА show
Gallery.prototype.show = function(num) {
  this.elementPhoto.classList.remove('invisible');// Показывает фотогалерею, убирая у ее DOM-элемента класс invisible.
//Обработчики событий (2 шт.):
  this.closeGallery.onclick = function() {
    var that = this;
    that.hide();
  };
  this.elementPhoto.onclick = function() {
    var that = this;
    if (that.activePicture === that.pictures.length - 1) {
      that.setActivePicture(0);
    }else{
      that.setActivePicture(num++);
    }
    this.setActivePicture(num);// Вызывает метод setActivePicture, передав в него параметром число, которое было передано параметром в show;
  };


////////////////////////////////////////////////////////////////////
//ДОБАВЛЕНИЕ МЕТОДА hide :
  Gallery.prototype.hide = function() {
    this.elementPhoto.classList.add('invisible'); // Добавлет DOM-элементу фотогалереи класс invisible
    this.elementPhoto.onclick = null;
    this.closeGallery.onclick = null;
  };
////////////////////////////////////////////////////////////////////
//ДОБАВЛЕНИЕ МЕТОДА setActivePicture :
  Gallery.prototype.setActivePicture = function(number) {
    this.activePicture = number;
    this.overlayImage.src = this.pictures[this.activePicture].url;
    this.galleryLikes = this.pictures[this.activePicture].likes;
    this.galleryComments = this.pictures[this.activePicture].comments;
  };
};
///////////////////////////////////////////////////////////////////////
module.exports = new Gallery();
