const modalCookiesEl = document.querySelector('[data-modalCookies]');

export const openModalCookies = (
  properties = { delayPointerEventsAll: 300 }
) => {
  const { delayPointerEventsAll: delay = 300 } = properties;

  modalCookiesEl.classList.remove('closed');
  modalCookiesEl.classList.add('opened');

  setTimeout(() => {
    modalCookiesEl.style.pointerEvents = 'all';
  }, delay);
};

export const closeModalCookies = () => {
  modalCookiesEl.classList.remove('opened');
  modalCookiesEl.classList.add('closed');

  modalCookiesEl.style.pointerEvents = 'none';
};
