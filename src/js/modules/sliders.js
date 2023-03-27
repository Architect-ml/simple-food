import '../libraries/swiper.min.js';

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.testimonials__pagination',
    type: 'bullets',
    clickable: 'true',
    bulletClass: 'testimonials__bullet',
    bulletActiveClass: 'testimonials__bullet--active',
  },
  navigation: {
    nextEl: '.testimonials__btn-next',
    prevEl: '.testimonials__btn-prev',
  }
});