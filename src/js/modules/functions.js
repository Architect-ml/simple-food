//Removes the focus effects after click
const rmFocus = document.querySelectorAll('.logo, .link, .btn, .btn-icon, .categories__btn, .testimonials__btn, .testimonials__bullet');
const menuLink = document.querySelectorAll('.menu__link');

rmFocus.forEach(e => {
  e.addEventListener('click', () => {
    e.blur();
  });
});

//Add class '--active' to the active '.menu__link'
menuLink.forEach(item => {
  item.addEventListener('click', () => {
    menuLink.forEach(i => { i.classList.remove('menu__link--active') })
    item.classList.add('menu__link--active')
  });
});