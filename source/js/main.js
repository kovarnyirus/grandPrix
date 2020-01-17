'use strict';
$( document ).ready(function() {

  $('.team-gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    rows: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews-partners__list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    rows: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews__list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    rows: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  function tabscostume(tab) {
    $('.' + tab + '__head').on('click', '.' + tab + '__head-item:not(.active)', function (e) {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.' + tab).find('.' + tab + '__body-item').removeClass('active').eq($(this).index()).addClass('active');
    });
  };
  tabscostume('catalog');

  $(".main-nav__toggle").click(function () {
    $(this).closest('.main-nav').toggleClass("main-nav--open");
  });

  $(".main-nav").on('click', '[href*="#"]', function (e) {
    var fixed_offset = -2;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
    e.preventDefault();
  });

  $('input[type="tel"]').mask("+7(999) 999-9999", {});

});
