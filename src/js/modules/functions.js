//Removes the focus effects after click
const rmFocus = document.querySelectorAll('.logo, .link, .button, .input, .btn-svg, .categories__btn');

rmFocus.forEach(e => {
  e.addEventListener('click', () => {
    e.blur();
  });
});

//Add class '--active' to the active '.menu__link'
document.querySelectorAll('.menu__link').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.menu__link').forEach(i => { i.classList.remove('menu__link--active') })
    item.classList.add('menu__link--active')
  });
});

//Add class '--active' to the active '.categories__btn'
document.querySelectorAll('.categories__btn').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.categories__btn').forEach(i => { i.classList.remove('categories__btn--active') })
    item.classList.add('categories__btn--active')
  })
})