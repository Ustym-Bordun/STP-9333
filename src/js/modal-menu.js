import { customAnimations } from './utils/custom-animations.js';

import { closeModalAndScrollToSection } from './utils/scrollToSection.js';

customAnimations(['[data-modal-menu-navigation-link]']);

const modalMenuNavigationLinkEls = document.querySelectorAll(
  '[data-modal-menu-navigation-link]'
);

modalMenuNavigationLinkEls.forEach(link => {
  closeModalAndScrollToSection(link);
});
