/* global $:false, jQuery:false, FastClick:false, fitVids:false, classie:false */

require('modernizr');
require('fastclick');
require('fitvids');
require('classie');
require('./vendor/ios-rotate-scaling-fix');
require('lunr.js');
require('mustache');
require('jquery.mosaicflow');
require('date.format');
require('uri.js');
require('jquery.lunr.search');

var navigation = require('./libs/navigation');
var tracking   = require('./libs/tracking');

var triggerBttn   = document.getElementById('trigger-overlay'),
    overlay       = document.querySelector('div.overlay'),
    closeBttn     = overlay.querySelector('button.overlay-btn-close'),
    url           = window.location.href,
    trackingLinks = document.querySelectorAll('a');

$(function() {
  'use strict';

  // Show navigation handle
  navigation.showNavigationHandle();

  // MosaicFlow Gallery
  $('.recommendation').mosaicflow({
    minItemWidth: 200,
    columnClass: 'recommendation-column'
  });

  // FastClick
  FastClick.attach(document.body);

  // Fitvids
  fitVids('.container');

  // Hightlighting of navigation item
  if (navigation.currentNavigationItem()) {
    classie.add(navigation.currentNavigationItem().parentElement, 'nav-is-active');
  }

  // Lunr.js Search
  $('#search-query').lunrSearch({
    indexUrl: '/search.json',             // URL of the `search.json` index data for your site
    results:  '#search-results',          // jQuery selector for the search results container
    entries:  '.search-results-entries', // jQuery selector for the element to contain the results list, must be a child of the results element above.
    template: '#search-results-template'  // jQuery selector for the Mustache.js template
  });

  // Navigation
  triggerBttn.addEventListener('click', navigation.toggleOverlay);
  closeBttn.addEventListener('click', navigation.toggleOverlay);

  // Tracking of all links
  $(trackingLinks).on('click', tracking.trackLinksWithGoogleAnalytics);
});
