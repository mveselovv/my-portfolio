window.addEventListener('DOMContentLoaded', function () {

  /* Свайпер событий + скрытие блоков */
    const eventsButton = document.querySelector('.events-main__more');
    eventsButton.addEventListener('click', function () {
      document.querySelectorAll('.event-list__item').forEach(function (event) {
        event.style.display = "block";
      });
      document.querySelectorAll('.event-list__item:nth-child(3n + 1)').forEach(function (item) {
        item.classList.add('events-list--margin');
      });

      document.querySelector('.events-main__more').classList.add('events-main__more--hidden');
    });

    /* ----------- */

    const pageWidth = window.matchMedia('(max-width: 767px)');
    function createMobileSwiper() {
      document.querySelector('.events__swiper-container').classList.add('events__mobile-swiper');
      document.querySelector('.events__swiper-container').classList.remove('swiper-no-swiping');

      document.querySelector('.event-list').classList.add('swiper-wrapper');

      document.querySelectorAll('.event-list__item:nth-child(1n + 3)').forEach(item => {
        item.style.display = 'block';
      });

      document.querySelectorAll('.event-list__item').forEach(item => {
        item.classList.add('swiper-slide');
      });

      const mobileSwiper = new Swiper('.events__swiper-container', {
        direction: 'horizontal',
        spaceBetween: 20,

        breakpoints: {
          320: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
        },

        pagination: {
          el: '.swiper-pagination-events',
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          clickable: 'true',
        },
      });
    }

    if (pageWidth.matches) {
      createMobileSwiper();
    }

    pageWidth.addEventListener('change', event => {
      if (!event.matches) {
        document.querySelector('.events__swiper-container').classList.remove('events__mobile-swiper', 'swiper-container-initialized', 'swiper-container-horizontal');
        document.querySelector('.events__swiper-container').classList.add('swiper-no-swiping');

        document.querySelector('.events-list').classList.remove('swiper-wrapper');

        document.querySelectorAll('.event-list__item:nth-child(1n + 3)').forEach(item => {
          item.style.display = '';
        });

        document.querySelectorAll('.event-list__item').forEach(item => {
          item.classList.remove('swiper-slide', 'swiper-slide-active');
          item.style.width = '';
          item.style.marginRight = '';
        });

        if (document.querySelector('.events-main__more').classList.contains('events-main__more--hidden')) {
          document.querySelector('.events-main__more').classList.remove('events-main__more--hidden');
        }
      } else {
        createMobileSwiper();
      }
    });

  /* Аккардеон публикаций */
document.querySelectorAll('.mobile-spoiler__checkbox').forEach(function (categoryActivating) {
  categoryActivating.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelector('.publications__mobile-spoiler').classList.add('publications__mobile-spoiler__clicked-checkbox');
    document.querySelector('.publications__chosen-category').classList.add('publications__chosen-category__active');
    document.querySelector(`[data-target="${path}"]`).classList.remove('categories-list__item__hidden');
  });
});

document.querySelectorAll('.categories-list__close-button').forEach(function (categoryClosing) {
  categoryClosing.addEventListener('click', function () {
    const buttonPath = event.currentTarget.dataset.path;

    document.querySelector(`[data-target="${buttonPath}"]`).classList.add('categories-list__item__hidden');
  });
});

  $( function() {
    $( ".publications__mobile-spoiler").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        header: '> .mobile-spoiler__heading'
    });
});

$(document).ready(function(){
	$(".mobile-spoiler__heading").click(function(){
		$(".publication").toggleClass("publication__open"); return false;
	});
});

/* Проекты слайдер */
const partnersSwiper = new Swiper('.project-swiper__container', {
  direction: 'horizontal',
  speed: 800,
  loopFillGroupWithBlank: true,

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },

    525: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    768: {
      spaceBetween: 34,
      slidesPerView: 2,
    },

    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
    },

    1200: {
      spaceBetween: 50,
      slidesPerView: 2,
    },

    1440: {
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
    nextEl: '.project-next-btn',
    prevEl: '.project-prev-btn',
  },
});

/* Слайдер галлереи */
const gallerySwiper = new Swiper('.gallery-swiper__container', {
  direction: 'horizontal',
  loopFillGroupWithBlank: true,
  slidesPerColumnFill: 'column',
  speed: 800,

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerColumn: 1,
      slidesPerView: 1,
      slidesPerColumnFill: 'row',
    },

    768: {
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumnFill: 'column',
    },

    925: {
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumnFill: 'column',
    },

    1024: {
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumnFill: 'column',
    },

    1300: {
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1440: {
      spaceBetween: 20,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },


    1920: {
      spaceBetween: 50,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  a11y: {
    containerRoleDescriptionMessage: 'Вы находитесь в галлереи, пожалуйста, выбирете картинку.',
    slideLabelMessage: 'Выбрана картина',
  },

  pagination: {
    el: '.pagination-gallery',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev',
  },
});

  /* Слайдер для публикаций */
  const publicationsSwiper = new Swiper('.publication-swiper__container', {
    direction: 'horizontal',
    loopFillGroupWithBlank: true,
    speed: 800,

    breakpoints: {
      768: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      925: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 2,
      },

      1024: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1200: {
        spaceBetween: 34,
        slidesPerView: 3,
        slidesPerGroup: 2,
      },

      1441: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1920: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    a11y: {
      containerRoleDescriptionMessage: 'Вы находитесь в изданиях, пожалуйста, выберите книгу.',
      slideLabelMessage: 'Выбрана книга',
    },

    pagination: {
      el: '.swiper-pagination-pub',
      type: 'fraction',
  },

  navigation: {
      nextEl: '.swiper-button-next-pub',
      prevEl: '.swiper-button-prev-pub',
  },
  });

  /* Тултипы */

  tippy('#tooltip__one', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'cacaca',
  });

  tippy('#tooltip__two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'cacaca',
  });

  tippy('#tooltip__tree', {
    content: 'В стремлении повысить качество',
    theme: 'cacaca',
  });

  /* Бургер меню */

    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#burger-menu').classList.add('menu-block__active');

      document.querySelector('.burger-closed').addEventListener('click', function () {
        document.querySelector('#burger-menu').classList.remove('menu-block__active');
      });
    });


  /* Анимация header */
  $(function () {
    $('.header-wrap__search').click(function () {
      $(this).toggleClass('open_search');
    });
  });

  $(function () {
    $('.stroke-search').click(function () {
      $(this).toggleClass('closed__search');
    });
  });

  document.querySelector('.header-wrap__search').addEventListener('click', function (e) {
    var div = document.querySelector('.stroke-search');
    div.style.display = div.style.display === 'flex' ? 'none' : 'flex'
    gsap.from(".stroke-search", {
      y: -75,
      duration: 1,
      ease: "expo.out",
    });
    gsap.from(".header-wrap__search", {
      opacity: 1,
      duration: 2,
      ease: "expo.out"
    });
    gsap.from(".open__burger", {
      y: -100,
      opacity: 1,
      duration: 2,
      ease: "expo.out"
    });
  })


  /* select */

  const selectSingle = document.querySelector('.__select');
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }
  /* Валидация формы контакта */
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) - 999 - 99 - 99");
  im.mask(selector);
  new JustValidate('.contacts-form__validation', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
  })

  /* Дроп меню */
  document.querySelectorAll('.navigation-hero__select').forEach(function (herobtn) {
    herobtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.navigation-hero__list').forEach(function (dropmenu) {
        dropmenu.classList.remove('navigation-hero__list--active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('navigation-hero__list--active')
    })
  })

  $(document).mouseup(function(e) {
    var div = $(".navigation-hero__select");
    var toggle = $('.navigation-hero__list');
    if (!div.is(e.target)
      &&
      !toggle.is(e.target)
      &&
      div.has(e.target).length === 0) {
      $(".navigation-hero__list").removeClass('navigation-hero__list--active');
    }
  });

    /* Каталог табы */
    document.querySelectorAll('.catalog__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.catalog-doer').forEach(function (tabContent) {
          tabContent.classList.remove('tab-content-active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
    })

  /* Каталог смена языка */
  document.querySelectorAll('.catalog__lang').forEach(function (tabsBtnLang) {
    tabsBtnLang.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-lang__content').forEach(function (tabContentLang) {
        tabContentLang.classList.remove('catalog-lang__active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-lang__active')
    })
  })

  /* Аккардеон */
  $( function() {
    $( ".catalog__list").accordion({
        collapsible: true,
        animate: 400,
        heightStyle: 'content',
        header: '> .catalog-doer__items > .catalog-doer__item'
    });
});


document.querySelectorAll('.catalog-doer__content--btn').forEach(function (authorChoice) {
  authorChoice.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.catalog-doer__content--btn').forEach(function (unactive) {
      unactive.classList.remove('catalog-doer__active');
    });

    document.querySelectorAll('.catalog-doer').forEach(function (tabContent) {
      tabContent.classList.remove('tab-content-active');
    });

    document.querySelector(`[data-path="${path}"]`).classList.add('catalog-doer__active');
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  });
});


  /* Модальное окно галлереи */

  !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');

   modalButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
      });
   });

   closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

  /* Яндекс.Карты */

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75646, 37.62321],
      zoom: 15,
      controls: ['smallMapDefaultSet'],
    });
    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/maps-marker.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove("typeSelector", "rulerControl");
    myMap.controls.remove("searchControl");
    myMap.controls.remove("fullscreenControl");
    myMap.controls
      .add('zoomControl', {
        size: "small",
        float: 'right',
      })
  }
})
