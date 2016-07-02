let disabled = false;
let currentPosition, currentOverflow, currentWidth;

export default {
  on() {
    if (disabled) {
      return;
    }

    disabled = true;

    const htmlEl = document.querySelector('html');
    const body = document.body;

    // `window.innerHeight` is the height of the viewport
    // `body.clientHeight` is the height of the document
    // If the document fits in the window, then the document
    // cannot be scrolled, and we don't need to do anything.
    if (window.innerHeight >= body.clientHeight) {
      return;
    }

    // Determine the `scrollTop` to use. Some browsers require checking the
    // `body`, others use `html`.
    const bodyScrollTop = body.scrollTop;
    const htmlScrollTop = htmlEl.scrollTop;
    let scrollTop = bodyScrollTop ? bodyScrollTop : htmlScrollTop;

    // Store the current value of the htmlEl's styles – we're about to override
    // them.
    currentPosition = htmlEl.style.position;
    currentOverflow = htmlEl.style.overflowY;
    currentWidth = htmlEl.style.width;

    // Fixing the position of the `htmlEl` prevents the page from scrolling
    // at all.
    htmlEl.style.position = 'fixed';
    // Setting `overflowY` to `scroll` ensures that any scrollbars that are
    // around stick around. Otherwise, there would be a "jump" when the page
    // becomes unscrollable as the bar would vanish.
    htmlEl.style.overflowY = 'scroll';
    // This makes sure that the page doesn't collapse (usually your CSS will
    // prevent this, but it's best to be safe)
    htmlEl.style.width = '100%';
    // Scoot down the `htmlEl` to be in the same place that the user had
    // scrolled to.
    htmlEl.style.top = `-${scrollTop}px`;
  },

  off() {
    if (!disabled) {
      return;
    }

    disabled = false;

    const htmlEl = document.querySelector('html');
    const body = document.body;

    // Reset `htmlEl` to the original styles.
    htmlEl.style.position = currentPosition;
    htmlEl.style.overflowY = currentOverflow;
    htmlEl.style.width = currentWidth;

    // Retrieve our original scrollTop from the htmlEl's top
    const scrollTop = -parseInt(htmlEl.style.top);
    // Return us to the original scroll position. Once again, we set this on
    // both the `body` and the `htmlEl` to be safe.
    htmlEl.scrollTop = scrollTop;
    body.scrollTop = scrollTop;
  }
};
