// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .
//= require turbolinks
//= require wow
//= require jquery
//= require jquery.slick

$(document).on('ready page:load', function() {

});

$(document).on('turbolinks:load', function(event) {
  new WOW().init();
  var anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      var blockID = anchor.getAttribute('href')

      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px'
  });
  $('.center').on('init', function(event, slick) {
    $('.content').hide();
    $('.content[data-id=' + 1 + ']').show();
  });
  $(".center").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    focusOnSelect: true,
    centerMode: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 6
  });
  $('.center').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.content').hide();
    $('.content[data-id=' + (currentSlide + 1) + ']').show();
  });

  $(".mobnav").hide();
  	// when .menuBtn is clicked, do this
  	$("#menuicon").click(function() {
  		// open the menu with slide effect
  		$(".mobnav").slideToggle(300);
  	});

    $("#close").click(function() {
      // open the menu with slide effect
      $(".mobnav").hide();
    });
});
