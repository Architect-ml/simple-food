//Removes the focus effects after click
const rmFocus = document.querySelectorAll('.logo, .link-states, .btn, .user-nav__btn, .food-card__link, .categories__btn, .testimonials__btn, .testimonials__bullet, .footer__link-social');
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