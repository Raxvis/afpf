# afpf - Async Functional Programming Functions

[![Version](https://img.shields.io/npm/v/afpf?style=for-the-badge)](https://npmjs.org/package/afpf)

[![Build Status](https://img.shields.io/github/workflow/status/Prefinem/afpf/ci?style=for-the-badge)](https://github.com/Prefinem/afpf/actions) [![Maintainability](https://img.shields.io/codeclimate/coverage-letter/Prefinem/afpf?style=for-the-badge)](https://codeclimate.com/github/Prefinem/afpf/maintainability) [![Test Coverage](https://img.shields.io/codecov/c/github/Prefinem/afpf?style=for-the-badge)](https://codecov.io/gh/Prefinem/afpf)

![Monthly Downloads](https://img.shields.io/npm/dm/afpf?style=for-the-badge)

![Issues](https://img.shields.io/github/issues/Prefinem/afpf?style=for-the-badge) ![Pull Requests](https://img.shields.io/github/issues-pr/Prefinem/afpf?style=for-the-badge)

![Dependencies](https://img.shields.io/david/Prefinem/afpf?style=for-the-badge) ![Dev Dependencies](https://img.shields.io/david/dev/Prefinem/afpf?style=for-the-badge)

afpf is a set of functions that make it easy to write functional scripts with async / await support

# NOTICE

These docs are awful. If you are interested in using one of the library and need some help, please create an issue and I will work on the docs for that first. Thanks

# Getting Started

```js
const afpf = require('afpf');

const fn1 = () => console.log('Function 1');
const fn2 = () => console.log('Function 2');

const run = afpf.pipe(
	fn1,
	fn2,
)();
```

# Installation

    yarn add afpf

or

    npm i afpf

# Docs

[DOCS](https://github.com/Prefinem/afpf/blob/master/DOCS.md)
