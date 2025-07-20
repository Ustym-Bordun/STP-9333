export const focusBlur = ({ selector, delay = 300 }) => {
  const handler = e => {
    const target = e.target.closest(selector);

    if (!target) return;

    setTimeout(() => {
      target.blur();
    }, delay);
  };

  if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousedown', handler);
  } else {
    document.addEventListener('mousedown', handler);
    // Реакція touch на сенсорних екранах (моб, таблет)
    document.addEventListener('touchstart', handler);
  }
};
