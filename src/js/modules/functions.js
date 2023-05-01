//Removes the focus effects after click
const rmFocus = document.querySelectorAll('.logo, .burger, .link-states, .btn, .user-nav__btn, .food-card__link, .categories__btn, .testimonials__btn, .testimonials__bullet, .footer__link-social');
const menuLink = document.querySelectorAll('.menu__link');
const mobileMenuLink = document.querySelectorAll('.mobile-menu__link');

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

//Add class '--active' to the active '.mobile-menu__link'
mobileMenuLink.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenuLink.forEach(i => { i.classList.remove('mobile-menu__link--active') })
    item.classList.add('mobile-menu__link--active')
  });
});