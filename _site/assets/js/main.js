$(document).ready( function() {
  new WOW().init();
  $('.slider').slick({
    dots: true,
    arrows: true,
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
});
