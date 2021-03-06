/* global classie:false */

require('classie');
require('./vendor/ios-rotate-scaling-fix');

var Masonry = require('masonry-layout');
var fitvids = require('fitvids');
var attachFastClick = require('fastclick');
var imagesLoaded = require('imagesloaded');
var navigation = require('./libs/navigation');
var tracking = require('./libs/tracking');

var gallery = document.querySelector('.recommendation');
var galleryLatestBooks = document.querySelector('.recommendation-latest.books');
var galleryLatestMovies = document.querySelector('.recommendation-latest.movies');
var trackingLinks = document.querySelectorAll('a');

var masonryOptions = {
  itemSelector: '.recommendation-item',
  columnWidth: '.recommendation-sizer',
  gutter: 10,
  percentPosition: true,
  transitionDuration: 0
};

if ('querySelector' in document && 'addEventListener' in window) {
  document.addEventListener('DOMContentLoaded', function() {

    // Masonry
    if (gallery) {
      imagesLoaded(gallery, function() {
        var msnry = new Masonry(gallery, masonryOptions);
      });
    }

    // Masonry on overview page
    if (galleryLatestBooks) {
      imagesLoaded(galleryLatestBooks, function() {
        var msnry = new Masonry(galleryLatestBooks, masonryOptions);
      });
    }

    if (galleryLatestMovies) {
      imagesLoaded(galleryLatestMovies, function() {
        var msnry = new Masonry(galleryLatestMovies, masonryOptions);
      });
    }

    // FastClick
    attachFastClick(document.body);

    // Fitvids
    fitvids('.container');

    // Hightlighting of navigation item
    if (navigation.currentNavigationItem()) {
      classie.add(navigation.currentNavigationItem().parentElement, 'nav-is-active');
    }

    // Tracking of all links
    for (var i = 0, len = trackingLinks.length; i < len; i++) {
      var trackingLink = trackingLinks[i];

      trackingLink.addEventListener('click', tracking.trackLinksWithGoogleAnalytics);
    }
  });
}
