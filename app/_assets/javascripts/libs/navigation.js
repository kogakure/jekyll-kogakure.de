/*global Modernizr:false, classie:false */

var container       = document.querySelector('div.container'),
    url             = window.location.href,
    overlay         = document.querySelector('div.overlay'),
    triggerBttn     = document.querySelector('.nav-btn'),
    navigationLinks = '.nav-link',
    INVISIBLE       = 'invisible',
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    support = {
      transitions: Modernizr.csstransitions
    };

module.exports = {
  /**
   * Open/Close navigation layer
   */
  toggleOverlay: function(event) {
    event.preventDefault();

    if (classie.has(overlay, 'overlay-open')) {
      classie.remove(overlay, 'overlay-open');
      classie.remove(container, 'container-overlay');
      classie.add(overlay, 'overlay-close');

      var onEndTransitionFn = function(ev) {
        if (support.transitions) {
          if (ev.propertyName !== 'visibility') return;
          this.removeEventListener(transEndEventName, onEndTransitionFn);
        }

        classie.remove(triggerBttn, 'hidden');
        classie.remove(overlay, 'overlay-close');
      };

      if (support.transitions) {
        overlay.addEventListener(transEndEventName, onEndTransitionFn);
      } else {
        onEndTransitionFn();
      }
    } else if(!classie.has(overlay, 'overlay-close')) {
      classie.add(triggerBttn, 'hidden');
      classie.add(overlay, 'overlay-open');
      classie.add(container, 'container-overlay');
    }
  },

  /**
   * Hightlight current navigation item
   */
  currentNavigationItem: function() {
    var selectedNavigationItem = Array.prototype.filter.call(document.querySelectorAll(navigationLinks), function(target) {
      return target.href === url;
    });

    return selectedNavigationItem[0];
  },

  /**
  * Make navigation handle visible
  */
  showNavigationHandle: function() {
    if (classie.has(triggerBttn, INVISIBLE)) {
      classie.remove(triggerBttn, INVISIBLE);
    }
  }
};
