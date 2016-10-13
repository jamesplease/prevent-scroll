# prevent-scroll

Reliably disable scrolling

[![Travis build status](http://img.shields.io/travis/jmeas/prevent-scroll.svg?style=flat)](https://travis-ci.org/jmeas/prevent-scroll)
[![Code Climate](https://codeclimate.com/github/jmeas/prevent-scroll/badges/gpa.svg)](https://codeclimate.com/github/jmeas/prevent-scroll)
[![Test Coverage](https://codeclimate.com/github/jmeas/prevent-scroll/badges/coverage.svg)](https://codeclimate.com/github/jmeas/prevent-scroll)
[![Dependency Status](https://david-dm.org/jmeas/prevent-scroll.svg)](https://david-dm.org/jmeas/prevent-scroll)
[![devDependency Status](https://david-dm.org/jmeas/prevent-scroll/dev-status.svg)](https://david-dm.org/jmeas/prevent-scroll#info=devDependencies)

### Motivation

Preventing a user from scrolling is a surprisingly challenging thing to do on
the web. This library is the most robust solution I know of to disable
scrolling.

### Features

✓ Mobile and desktop support  
✓ Prevents scrolling through keyboard inputs  
✓ Never loses the position of the scrollbar  
✓ Never causes the scrollbar to appear or disappear unnecessarily  
✓ Solid browser support  
✓ Zero dependencies

### Installation

The recommended way to install this package is through npm.

```
npm install prevent-scroll
```

### API

##### `preventScroll.on()`

Disables scrolling.

##### `preventScroll.off()`

Enables scrolling.

### Example Usage

```js
import preventScroll from 'prevent-scroll';

// Disable scrolling
preventScroll.on();

// Allow scrolling
preventScroll.off();
```
