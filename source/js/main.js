'use strict';
$( document ).ready(function() {

  let sliderBtnPrev = '<button class="slider__btn-prev slick-arrow">\n' +
    '          <svg class="icon icon-prev">\n' +
    '            <use xlink:href="../img/svg/sprite.svg#icon-prev"></use>\n' +
    '          </svg>\n' +
    '        </button>';
  let sliderBtnNext = '<button class="slider__btn-next slick-arrow">\n' +
    '          <svg class="icon icon-next">\n' +
    '            <use xlink:href="../img/svg/sprite.svg#icon-next"></use>\n' +
    '          </svg>\n' +
    '        </button>';

  let sliderTeamBtnPrev = '<button class="slider__btn-prev slider__btn-prev--team slick-arrow">\n' +
    '          <svg class="icon icon-prev">\n' +
    '            <use xlink:href="../img/svg/sprite.svg#icon-prev"></use>\n' +
    '          </svg>\n' +
    '        </button>';
  let sliderTeamBtnNext = '<button class="slider__btn-next slider__btn-next--team slick-arrow">\n' +
    '          <svg class="icon icon-next">\n' +
    '            <use xlink:href="../img/svg/sprite.svg#icon-next"></use>\n' +
    '          </svg>\n' +
    '        </button>';

  $('.team-gallery').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    rows: 0,
    dots: true,
    prevArrow: sliderTeamBtnPrev,
    nextArrow: sliderTeamBtnNext,
    responsive: [
      {
        breakpoint: 9999999,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          infinite: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          infinite: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
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
    prevArrow: sliderBtnPrev,
    nextArrow: sliderBtnNext,
    responsive: [
      {
        breakpoint: 99999,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          infinite: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '20px',
          infinite: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews__list').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 2,
    rows: 0,
    dots: true,
    prevArrow: sliderBtnPrev,
    nextArrow: sliderBtnNext,
    responsive: [
      {
        breakpoint: 999999,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          infinite: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          infinite: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
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

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

});
