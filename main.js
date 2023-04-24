/* Скрываем все секции основного раздела main__section */
const mainSectionsArr = document.querySelectorAll('.main__section');
mainSectionsArr.forEach((section) => section.classList.add('undisplayed'));

/* При загрузке страницы показываем секцию которая обозначена ка дефолтная (menus) */
window.addEventListener('load', () => {
  /* Показываем секцию */
  const defaultSection = document.querySelector('.defaultSection');
  defaultSection.classList.replace('undisplayed', 'displayed');
  defaultSection.classList.remove('defaultSection');
  /* Добавляем стили активной кнопке меню */
  const defaultNavItem = document.querySelector('.defaultNavItem');
  defaultNavItem.classList.replace('defaultNavItem', 'active-nav-btn');
  defaultNavItem.firstElementChild.classList.add('active-nav-btn');
  /* Добавляем активный класс навигации секции */
  const displayedSectionNav = defaultSection.querySelector('.section-nav');
  displayedSectionNav.classList.add('active-section-nav');
});

/* Объявляем функцию переключения секции по клику на кнопку меню навигации */
const displayTab = (e) => {
  /* Скрываем секцию отображавшуюся ранее (до клика на кнопку навигации) */
  const main = document.querySelector('.main');
  const displayedSection = main.querySelector('.displayed');
  displayedSection.classList.replace('displayed', 'undisplayed');
  /* Показывем секцию на которую кликнули */
  const targetSection = document.querySelector(`#${e.target.dataset.id}`);
  targetSection.classList.replace('undisplayed', 'displayed');
  /* Убираем стили с активной кнопки */
  const activeNavBtn = document.querySelectorAll('.active-nav-btn');
  activeNavBtn.forEach((item) => item.classList.remove('active-nav-btn'));
  /* Добавляем стили кнопке навигации на которую кликнули */
  e.target.classList.add('active-nav-btn');
  e.target.closest('.header__list-item').classList.add('active-nav-btn');
  /* Добавляем класс нововй активной секции */
  const displayedSectionNav = document.querySelector('.active-section-nav');
  displayedSectionNav.classList.remove('active-section-nav');
  targetSection.querySelector('.section-nav').classList.add('active-section-nav');
};

/* Добавляем обработчики событий клика на кнопки меню навигации */
const headerListItemsArr = document.querySelectorAll('.header__nav-btn');
headerListItemsArr.forEach((item) => item.addEventListener('click', displayTab));

/* Липкое меню секции при скролле */
const getActiveSectionNav = () => document.querySelector('.active-section-nav');

window.onscroll = () => {
  const activeSectionNav = getActiveSectionNav();
  const sectionNavList = activeSectionNav.querySelector('.section-nav__list');
  if (window.pageYOffset >= activeSectionNav.offsetTop) {
    sectionNavList.classList.add('sticky-section-nav');
  } else {
    sectionNavList.classList.remove('sticky-section-nav');
  }
};

/* Подсветка пункта меню секции при скролле */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.section-nav__link').forEach((link) => {
        const href = link.getAttribute('href');
        if (href.slice(1) === entry.target.id) {
          link.classList.add('section-nav__link--active');
        } else link.classList.remove('section-nav__link--active');
      });
    }
  });
}, {
  threshold: 1,
});

const subsectionsArr = document.querySelectorAll('.subsection');
subsectionsArr.forEach((subsection) => observer.observe(subsection));
