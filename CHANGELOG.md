### [2.0.0](https://github.com/jmeas/prevent-scroll/releases/tag/v2.0.0)

- The 1.x series of prevent-scroll would only prevent scrolling if the body
  of the page did not fit inside the window. This would cause an issue if at the
  time that you called prevent-scroll, preventing wasn't needed, but then the
  page changed to be taller afterwards. In the 2.x series, scrolling is always
  prevented, even if at the time that `on` is called, it's not necessary.

### [1.0.3](https://github.com/jmeas/prevent-scroll/releases/tag/v1.0.3)

- Fixes an issue where scrolling would not be prevented on certain apps, such as
  those that set `body, html { height: 100%; }`

### [1.0.2](https://github.com/jmeas/prevent-scroll/releases/tag/v1.0.2)

- Fix an issue where scroll position could get lost in Webkit browsers

### [1.0.1](https://github.com/jmeas/prevent-scroll/releases/tag/v1.0.1)

- Include built files in npm package (woops)

### [1.0.0](https://github.com/jmeas/prevent-scroll/releases/tag/v1.0.0)

- The first release
