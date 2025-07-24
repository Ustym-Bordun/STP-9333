import { getScrollbarWidth } from './get-scrollbar-width.js';

const bodyEl = document.body;
const headerEl = document.querySelector('[data-header]');
const menuModalEl = document.querySelector('[data-modalMenu]');
const modalCookiesEl = document.querySelector('[data-modalCookies]');

let removeRightPaddingTimeoutId;

const addRightPadding = () => {
  const scrollbarWidth = getScrollbarWidth();
  bodyEl.style.paddingRight = `${scrollbarWidth}px`;
  headerEl.style.paddingRight = `${scrollbarWidth}px`;
  menuModalEl.style.paddingRight = `${scrollbarWidth}px`;
  modalCookiesEl.style.paddingRight = `${scrollbarWidth}px`;

  clearTimeout(removeRightPaddingTimeoutId);
};
const removeRightPadding = () => {
  bodyEl.style.paddingRight = '';
  headerEl.style.paddingRight = '';
  modalCookiesEl.style.paddingRight = '';

  removeRightPaddingTimeoutId = setTimeout(() => {
    menuModalEl.style.paddingRight = '';
  }, 300);
};

let pointerEventsAllTimeoutId = null;
export const openModalMenu = (properties = { delayPointerEventsAll: 300 }) => {
  const { delayPointerEventsAll: delay = 300 } = properties;

  bodyEl.dataset.bodymenu = 'opened';

  menuModalEl.removeAttribute(`data-modal-menu-closed`);
  menuModalEl.dataset.modalMenuOpened = '';

  addRightPadding();

  pointerEventsAllTimeoutId = setTimeout(() => {
    menuModalEl.style.pointerEvents = 'all';
  }, delay);
};
export const closeModalMenu = () => {
  bodyEl.dataset.bodymenu = 'closed';

  menuModalEl.removeAttribute(`data-modal-menu-opened`);
  menuModalEl.dataset.modalMenuClosed = '';

  removeRightPadding();

  if (pointerEventsAllTimeoutId) {
    clearTimeout(pointerEventsAllTimeoutId);
    pointerEventsAllTimeoutId = null;
  }

  menuModalEl.style.pointerEvents = 'none';
};
