'use strict';
var Gallery = function() {
  this.activePicture = 0;
  this.elementPhoto = document.querySelector('.gallery-overlay');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.overlayImage = document.querySelector('.gallery-overlay-image');
};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};
