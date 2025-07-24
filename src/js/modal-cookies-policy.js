import { customAnimations } from './utils/custom-animations.js';

import {
  closeModalCookies,
  openModalCookies,
} from './utils/open-or-close-modal-cookies.js';

customAnimations(['[data-modal-cookies-policy-btn]']);

const modalCookiesPolicyBtnAcceptEl = document.querySelector(
  '[data-modalCookiesAccept]'
);
const modalCookiesPolicyBtnDeclineEl = document.querySelector(
  '[data-modalCookiesDecline]'
);

// const delayOpenModalCookies = 1000;
const delayOpenModalCookies = 500;
// const delayOpenModalCookies = 0;

const acceptedOrDeclinedCookies = localStorage.getItem('acceptedCookies');

if (!acceptedOrDeclinedCookies) {
  setTimeout(() => {
    // openModalCookies({ delayPointerEventsAll: delayOpenModalCookies });
    openModalCookies();
  }, delayOpenModalCookies);
}

modalCookiesPolicyBtnAcceptEl.addEventListener('click', () => {
  closeModalCookies();
  localStorage.setItem('acceptedCookies', 'true');
});
modalCookiesPolicyBtnDeclineEl.addEventListener('click', () => {
  closeModalCookies();
  localStorage.setItem('acceptedCookies', 'false');
});
