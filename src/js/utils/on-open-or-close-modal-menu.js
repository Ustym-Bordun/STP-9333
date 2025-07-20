import { getScrollbarWidth } from './get-scrollbar-width.js';

const bodyEl = document.body;
const headerEl = document.querySelector('[data-header]');
const menuModalEl = document.querySelector('[data-modalMenu]');

let removeRightPaddingTimeoutId;

const addRightPadding = () => {
  const scrollbarWidth = getScrollbarWidth();
  bodyEl.style.paddingRight = `${scrollbarWidth}px`;
  headerEl.style.paddingRight = `${scrollbarWidth}px`;
  menuModalEl.style.paddingRight = `${scrollbarWidth}px`;

  clearTimeout(removeRightPaddingTimeoutId);
};
const removeRightPadding = () => {
  bodyEl.style.paddingRight = '';
  headerEl.style.paddingRight = '';

  removeRightPaddingTimeoutId = setTimeout(() => {
    menuModalEl.style.paddingRight = '';
  }, 300);
};

let pointerEventsAllTimeoutId = null;
export const onOpen = (properties = { delayPointerEventsAll: 300 }) => {
  const { delayPointerEventsAll: delay = 300 } = properties;

  bodyEl.dataset.bodymenu = 'opened';

  menuModalEl.classList.remove('closed');
  menuModalEl.classList.add('opened');

  addRightPadding();

  pointerEventsAllTimeoutId = setTimeout(() => {
    menuModalEl.style.pointerEvents = 'all';
  }, delay);
};
export const onClose = () => {
  bodyEl.dataset.bodymenu = 'closed';

  menuModalEl.classList.remove('opened');
  menuModalEl.classList.add('closed');

  removeRightPadding();

  if (pointerEventsAllTimeoutId) {
    clearTimeout(pointerEventsAllTimeoutId);
    pointerEventsAllTimeoutId = null;
  }

  menuModalEl.style.pointerEvents = 'none';
};
