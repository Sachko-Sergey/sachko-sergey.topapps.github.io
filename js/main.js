//@prepros-append jquery.fancybox.min.js
//@prepros-append jquery.validate.min.js
//@prepros-append wow.min.js

$(document).ready(function() {
  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  });




  $('.slider-p').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 945,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

});


$(function () {
  
  $('.header__burger').on('click', function (event) {
    $('.header__burger,.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.close__nav').on('click', function (event) {
    $('.header__burger,.header__nav').removeClass('active');
  });   

});
