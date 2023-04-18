/* Скрываем подменю(подкатегории) навигации */
const headerSublistArr = document.querySelectorAll('.header__sublist');
headerSublistArr.forEach((list) => list.classList.add('undisplayed'));

/* Скрываем все секции основного раздела */
const mainSectionsArr = document.querySelectorAll('.main__section');
mainSectionsArr.forEach((list) => list.classList.add('undisplayed'));

/* При загрузке страницы показываем секцию которая обозначена ка дефолтная (menus) */
window.addEventListener('load', () => {
  /* ToDo: Добавить активную кнопку меню, добавить ей стили */

  /* Показываем секцию */
  const defaultSection = document.querySelector('.defaultDisplayed');
  defaultSection.classList.replace('undisplayed', 'displayed');
  defaultSection.classList.remove('defaultDisplayed');
});

/* Отображение подменю навигации по наведению мыши */
const showNavSublist = (e) => {
  const navMenuSublist = e.target.querySelector('.header__sublist');
  navMenuSublist.classList.replace('undisplayed', 'displayed');
};

const hideNavSublist = (e) => {
  const navMenuSublist = e.target.querySelector('.header__sublist');
  navMenuSublist.classList.replace('displayed', 'undisplayed');
};

const headerlistArr = document.querySelectorAll('.header__list-item');
headerlistArr.forEach((item) => item.addEventListener('mouseenter', showNavSublist));
headerlistArr.forEach((item) => item.addEventListener('mouseleave', hideNavSublist));

/* Объявляем функцию переключения секции по клику на кнопку меню навигации */
const displayTab = (e) => {
  /* Скрываем секцию отображавшуюся ранее (до клика на кнопку навигации) */
  const main = document.querySelector('.main');
  const displayedSection = main.querySelector('.displayed');
  displayedSection.classList.replace('displayed', 'undisplayed');
  /* Показывем секцию на которую кликнули */
  const targetSection = document.querySelector(`#${e.target.dataset.id}`);
  targetSection.classList.replace('undisplayed', 'displayed');
};

/* Добавляем обработчики событий клика на кнопки меню навигации */
const headerListItemsArr = document.querySelectorAll('.header__list-item');
headerListItemsArr.forEach((item) => item.addEventListener('click', displayTab));
