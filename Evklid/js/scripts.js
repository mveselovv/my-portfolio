window.addEventListener('DOMContentLoaded', function() {
  
  /* Burger */
  $('#menu').on('click', function() {
    $('#header-list').toggleClass('list-active');
 });

    /* Swiper */
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'horizontal',
    grabCursor: 'true',
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  /* Accardion */
  $(function() {
    $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    } );
  });

})

function newFunction() {
  document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('#header-list').classList.toggle('list-active');
  });
}
