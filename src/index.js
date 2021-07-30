
import foodCardTpl from './templates/food-card.hbs';
import foodCards from './menu.json';

const refs = {
  switchMarker: document.querySelector('.theme-switch__marker'),
  themeCheckbox: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('.menu'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//разметкa
const menuMarkup = foodCards.map(card => foodCardTpl(card)).join('');
refs.menu.innerHTML = menuMarkup;

// установка темы
populateTheme();

function populateTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme === Theme.DARK) {
    refs.body.className = Theme.DARK;
    refs.themeCheckbox.checked = true;
    refs.switchMarker.style.transition = 'none';
  } else {
    refs.body.className = Theme.LIGHT;
  }
}

// изменение темы
refs.themeCheckbox.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  refs.switchMarker.style.transition = '';
  if (refs.body.className === Theme.DARK) {
    refs.body.className = Theme.LIGHT;
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.className = Theme.DARK;
    localStorage.setItem('theme', Theme.DARK);
  }
}