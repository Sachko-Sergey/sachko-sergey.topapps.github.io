$(document).ready(function() {
  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });


  $('.slider-p').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });
});