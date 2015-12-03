/*global classie:false */

var container       = document.querySelector('div.container'),
    url             = window.location.href,
    overlay         = document.querySelector('div.overlay'),
    triggerBttn     = document.querySelector('.nav-btn'),
    navigationLinks = '.nav-link',
    INVISIBLE       = 'invisible';

module.exports = {
  /**
   * Hightlight current navigation item
   */
  currentNavigationItem: function() {
    var selectedNavigationItem = Array.prototype.filter.call(document.querySelectorAll(navigationLinks), function(target) {
      return target.href === url;
    });

    return selectedNavigationItem[0];
  }
};
