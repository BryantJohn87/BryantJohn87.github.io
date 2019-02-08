$(document).ready(function() {
  new WOW({
    mobile: false,
    live: true
  }).init();

  $('.slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: '0px'
  });

  $('.center').on('init', function(event) {
    $('.content').hide();
    $('.content[data-id=' + 1 + ']').show();
  });
  if (screen.width > 500) {
    $(".center").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      speed: 700,
      centerMode: true,
      infinite: true,
      centerPadding: '35%',
      focusOnSelect: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 2
    });
  } else {
    $(".center").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      speed: 700,
      centerMode: true,
      infinite: true,
      centerPadding: '33%',
      pauseOnHover: false,
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  $('.center').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.content').hide();
    $('.content[data-id=' + (currentSlide + 1) + ']').show();
  });


  $("#menuicon").click(function() {

    $(".mobnav").slideToggle(300);
  });

  $("#menuicon2").click(function() {

    $(".mobnav").slideToggle(300);
  });

  $("#close, #close2, #close3, #close4").click(function() {

    $(".mobnav").hide();
  });

  $(document).mouseup(function (e){
      var block = $(".mobnav");
      if (!block.is(e.target)
          && block.has(e.target).length === 0) {
          block.slideUp(300);
      }
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
    $(".col2").removeClass("hovered")
    $(".info2").removeClass("displayed")
    $(".col3").removeClass("hovered")
    $(".info3").removeClass("displayed")
    $(".mcoldivs .coldiv3").hide()
    $(".mcoldivs .coldiv2").hide()
    $(".mcoldivs .coldiv1").show()
  });
  $(".col2").click(function() {
    $(".mcoldivs .coldiv1").hide()
    $(".mcoldivs .coldiv2").show()
    $(".mcoldivs .coldiv3").hide()
  });
  $(".col3").click(function() {
    $(".mcoldivs .coldiv1").hide()
    $(".mcoldivs .coldiv2").hide()
    $(".mcoldivs .coldiv3").show()
  });

  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $(".col1").addClass("hovered")
    $(".info1").slideDown(300)
  };

  $(".col1").hover(function() {
    $(".col1").removeClass("hovered")
    $(".info1").slideDown(300)
    $(".info2").slideUp(10)
    $(".info3").slideUp(10)
  }, function() {
    $(".info1").slideUp(300)
  });
  $(".col2").hover(function() {
    $(".col1").removeClass("hovered")
    $(".info1").slideUp(300)
    $(".info2").slideDown(300)
    $(".info3").slideUp(300)
  }, function() {
    $(".info2").slideUp(300)
  });
  $(".col3").hover(function() {
    $(".col1").removeClass("hovered")
    $(".info1").slideUp(300)
    $(".info2").slideUp(300)
    $(".info3").slideDown(300)
  }, function() {
    $(".info3").slideUp(300)
  });
});
