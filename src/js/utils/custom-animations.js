import { activeAnimation } from './active-animation.js';
import { focusBlur } from './focus-blur.js';
import { hoverAnimation } from './hover-animation.js';

export const customAnimations = selectors => {
  selectors.forEach(selector => {
    // focusBlur({ selector, delay: 300 });
    // hoverAnimation({ selector, delay: 300 });
    // activeAnimation({ selector, delay: 300 });
    focusBlur({ selector });
    hoverAnimation({ selector });
    activeAnimation({ selector });
  });
};
