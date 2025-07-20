import { customAnimations } from './utils/custom-animations.js';

import { onClose, onOpen } from './utils/on-open-or-close-modal-menu.js';
import { scrollToSection } from './utils/scrollToSection.js';

customAnimations([
  '.logo-link',
  '.open-menu-btn',
  '.close-menu-btn',
  '.header-nav-link',
]);

const menuOpenBtnEl = document.querySelector('[data-modalMenuAction="open"]');
const menuCloseBtnEl = document.querySelector('[data-modalMenuAction="close"]');

const headerNavigationLinkEls = document.querySelectorAll(
  '[data-header-navigation-link]'
);

menuOpenBtnEl.addEventListener('click', e => {
  // onOpen({ delayPointerEventsAll: 300 });
  onOpen();
});

menuCloseBtnEl.addEventListener('click', e => {
  onClose();
});

headerNavigationLinkEls.forEach(link => {
  scrollToSection(link);
});
