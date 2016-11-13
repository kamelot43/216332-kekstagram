'use strict';

  module.exports = function(list, filterID) {
   switch (filterID) {
     case 'filter-popular':
       list.sort(function(a, b) {
         return b.likes - a.likes;
       });
       break;
       case 'filter-new':
       return list.filter(function(data) {
         if(Date.now() - data.created <= (3 * 24 * 60 * 60 * 1000)) {
           return data;
         }
       })
       list.sort(function(a, b) {
         return b.created - a.created;
       });
       break;
     case 'filter-discussed':
       list.sort(function(a, b) {
         return b.comments - a.comments;
       });
       break;
   }
    return list;
  };
