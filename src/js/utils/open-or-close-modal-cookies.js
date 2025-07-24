const modalCookiesEl = document.querySelector('[data-modalCookies]');

export const openModalCookies = (
  properties = { delayPointerEventsAll: 300 }
) => {
  const { delayPointerEventsAll: delay = 300 } = properties;

  modalCookiesEl.removeAttribute(`data-modal-cookies-closed`);
  modalCookiesEl.dataset.modalCookiesOpened = '';

  setTimeout(() => {
    modalCookiesEl.style.pointerEvents = 'all';
  }, delay);
};

export const closeModalCookies = () => {
  modalCookiesEl.removeAttribute(`data-modal-cookies-opened`);
  modalCookiesEl.dataset.modalCookiesClosed = '';

  modalCookiesEl.style.pointerEvents = 'none';
};
