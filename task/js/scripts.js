window.addEventListener('DOMContentLoaded', function () {


  // Продукты
const productSwiper = new Swiper('.products-list', {
    direction: 'horizontal',
    speed: 800,
    loopFillGroupWithBlank: true,
    autoplay: true,
  
    breakpoints: {
      320: {
        spaceBetween: 50,
        slidesPerView: 1,
      },

      525: {
        spaceBetween: 20,
        slidesPerView: 2,
      },

      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1024: {
        spaceBetween: 35,
        slidesPerView: 3,
      },

      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
  
    a11y: {
      containerRoleDescriptionMessage: 'Вы находитесь в разделе наши продукты',
      slideLabelMessage: 'Выбран продукт',
    },
  
    navigation: {
        nextEl: '.swiper-product-next',
        prevEl: '.swiper-product-prev',
      },

    pagination: {
        el: '.pagination-product',
        type: 'fraction',
      },
  });

  // Партнеры

  const partnersSwiper = new Swiper('.partner-list__container', {
    direction: 'horizontal',
    speed: 800,
    loopFillGroupWithBlank: true,
  
    breakpoints: {
      320: {
        spaceBetween: 50,
        slidesPerView: 1,
      },

      525: {
        spaceBetween: 34,
        slidesPerView: 2,
      },

      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
  
    a11y: {
      containerRoleDescriptionMessage: 'Вы находитесь в разделе наши партнеры',
      slideLabelMessage: 'Выбран партнер',
    },
  
    navigation: {
        nextEl: '.swiper-partner-next',
        prevEl: '.swiper-partner-prev',
      },

      pagination: {
        el: '.pagination-partner',
        type: 'fraction',
      },
  });

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('menu-block__active');

    document.querySelector('.burger__closed').addEventListener('click', function () {
      document.querySelector('#burger-menu').classList.remove('menu-block__active');
    });
  });

})