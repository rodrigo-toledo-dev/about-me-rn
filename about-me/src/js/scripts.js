
import jQuery from 'jquery';

/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
const scripts = function(){
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          jQuery('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    jQuery(document).scroll(function() {
      var scrollDistance = jQuery(this).scrollTop();
      if (scrollDistance > 100) {
        jQuery('.scroll-to-top').fadeIn();
      } else {
        jQuery('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    jQuery('.js-scroll-trigger').click(function() {
      jQuery('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    jQuery('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if (jQuery("#mainNav").offset().top > 100) {
        jQuery("#mainNav").addClass("navbar-shrink");
      } else {
        jQuery("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    jQuery(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    jQuery(function() {
      jQuery("body").on("input propertychange", ".floating-label-form-group", function(e) {
        jQuery(this).toggleClass("floating-label-form-group-with-value", !!jQuery(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        jQuery(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        jQuery(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  }
  

  export default scripts;
