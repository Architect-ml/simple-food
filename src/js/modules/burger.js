// Add classes for mobile menu and burger
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenuLink = document.querySelectorAll('.mobile-menu__link');
const body = document.body; // Disable scrolling when mobile menu is open

const toggleMenu = () => {
  burger.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  body.classList.toggle('disable-scroll');

  // if (mobileMenu.classList.contains('mobile-menu--active')) {
  //   burger.setAttribute('aria-label', 'Закрыть меню');
  //   burger.setAttribute('aria-expanded', 'true');
  // } else {
  //   burger.setAttribute('aria-label', 'Открыть меню');
  //   burger.setAttribute('aria-expanded', 'false');
  // }
};

burger.addEventListener('click', () => {
  toggleMenu();
});

// Close mobile menu after click on .mobile-menu__link
mobileMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    body.classList.remove('disable-scroll');
  });
});

// Close mobile menu after click on .mobile-menu__btn
mobileMenuBtn.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  mobileMenu.classList.remove('mobile-menu--active');
  body.classList.remove('disable-scroll');
});