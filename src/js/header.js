import { customAnimations } from './utils/custom-animations.js';

import {
  openModalMenu,
  closeModalMenu,
} from './utils/open-or-close-modal-menu.js';
import { scrollToSection } from './utils/scrollToSection.js';

customAnimations([
  '[data-header-logo-link]',
  '[data-header-open-menu-btn]',
  '[data-header-close-menu-btn]',
  '[data-header-navigation-link]',
]);

const menuOpenBtnEl = document.querySelector('[data-modalMenuAction="open"]');
const menuCloseBtnEl = document.querySelector('[data-modalMenuAction="close"]');

const headerNavigationLinkEls = document.querySelectorAll(
  '[data-header-navigation-link]'
);

menuOpenBtnEl.addEventListener('click', e => {
  // openModalMenu({ delayPointerEventsAll: 300 });
  openModalMenu();
});

menuCloseBtnEl.addEventListener('click', e => {
  closeModalMenu();
});

headerNavigationLinkEls.forEach(link => {
  scrollToSection(link);
});
