$(document).ready(function() {
  new WOW({
    mobile: false,
    live: true
  }).init();

  $('.slider').slick({
    dots: true,
    arrows: false,
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
    slidesToScroll: 3
  });
  $('.center').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.content').hide();
    $('.content[data-id=' + (currentSlide + 1) + ']').show();
  });

  // when .menuBtn is clicked, do this
  $("#menuicon").click(function() {
    // open the menu with slide effect
    $(".mobnav").slideToggle(300);
  });

  $("#menuicon2").click(function() {
    // open the menu with slide effect
    $(".mobnav").slideToggle(300);
  });

  $("#close, #close2, #close3, #close4").click(function() {
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

  $(".mcoldivs .coldiv2").hide()
  $(".mcoldivs .coldiv3").hide()
  $(".col1").click(function() {
    $(".mcoldivs .coldiv3").hide()
    $(".mcoldivs .coldiv2").hide()
    $(".mcoldivs .coldiv1").show()
  });
  $(".col2").click(function() {
    $(".mcoldivs .coldiv1").hide()
    $(".mcoldivs .coldiv3").hide()
    $(".mcoldivs .coldiv2").show()
  });
  $(".col3").click(function() {
    $(".mcoldivs .coldiv1").hide()
    $(".mcoldivs .coldiv2").hide()
    $(".mcoldivs .coldiv3").show()
  });
});
