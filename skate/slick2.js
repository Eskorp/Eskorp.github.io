$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav',
  adaptiveHeight: true
  
});

$('.slider_nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

