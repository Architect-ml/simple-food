import '../libraries/swiper.min.js';

const testimonialsSlider = new Swiper('.testimonials__swiper', {
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

const categoriesSlider = new Swiper('.categories__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  dragSize: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragClass: 'swiper-scrollbar-drag',
    draggable: true,
    hide: true,
    snapOnRelease: true,
  },
});

const restaurantSlider = new Swiper('.restaurant__swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.restaurant__pagination',
    type: 'bullets',
    clickable: 'true',
    bulletClass: 'restaurant__bullet',
    bulletActiveClass: 'restaurant__bullet--active',
  },
});

const testimonialsSliderMobile = new Swiper('.testimonials__mobile-swiper', {
  loop: true,
  navigation: {
    nextEl: '.testimonials__mobile-btn-next',
    prevEl: '.testimonials__mobile-btn-prev',
  }
});






// if (window.matchMedia("(max-width: 768px)").matches) {
//   /* the viewport is at least 400 pixels wide */
// } else {
//   /* the viewport is less than 400 pixels wide */
// }