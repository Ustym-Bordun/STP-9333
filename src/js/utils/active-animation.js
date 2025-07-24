export const activeAnimation = ({
  selector,
  dataName = 'active',
  delay = 300,
}) => {
  const handler = e => {
    const target = e.target.closest(selector);
    if (!target) return;

    target.dataset[dataName] = '';

    setTimeout(() => {
      target.removeAttribute(`data-${dataName}`);
    }, delay);
  };

  if (window.matchMedia('(hover: hover)').matches) {
    // Реакція на мишу
    document.addEventListener('mousedown', handler);

    // Реакція на Enter при фокусі на кнопці або посиланню
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches(selector)) {
        handler(e);
      }
    });
  } else {
    // Реакція на мишу
    document.addEventListener('mousedown', handler);

    // Реакція на Enter при фокусі на кнопці або посиланню
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches(selector)) {
        handler(e);
      }
    });

    // Реакція touch на сенсорних екранах (моб, таблет)
    document.addEventListener('touchstart', handler);
  }
};
