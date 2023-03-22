// Tabs for categories section
const categoriesListBtn = document.querySelector('.categories__list-btn');
const categoriesBtn = document.querySelectorAll('.categories__btn');
const categoriesItemCard = document.querySelectorAll('.categories__item-card');

categoriesListBtn.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('categories__btn')) {
    const path = target.dataset.path;

    categoriesBtn.forEach(el => {
      el.classList.remove('categories__btn--active')
    });
    target.classList.add('categories__btn--active');

    categoriesItemCard.forEach(el => {
      el.classList.remove('categories__item-card--visible');
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.categories__item-card').classList.add('categories__item-card--visible')
    });
    if (path == 'burger') {
      categoriesItemCard.forEach(el => {
        el.classList.add('categories__item-card--visible');
      });
    };
  };
});