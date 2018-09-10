# afpf - Async Functional Programming Functions

[![npm pack age](https://nodei.co/npm/afpf.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/afpf)

[![Version](https://badge.fury.io/js/afpf.svg)](https://npmjs.org/package/afpf) [![Build Status](https://travis-ci.org/Prefinem/afpf.svg)](https://travis-ci.org/Prefinem/afpf)

[![Maintainability](https://api.codeclimate.com/v1/badges/4f911850391938e811f1/maintainability)](https://codeclimate.com/github/Prefinem/afpf/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4f911850391938e811f1/test_coverage)](https://codeclimate.com/github/Prefinem/afpf/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/Prefinem/afpf.svg)](https://greenkeeper.io/)

![Weekly Downloads](https://img.shields.io/npm/dw/afpf.svg) ![Monthly Downloads](https://img.shields.io/npm/dm/afpf.svg) ![Yearly Downloads](https://img.shields.io/npm/dy/afpf.svg)

![Issues](https://img.shields.io/github/issues/Prefinem/afpf.svg) ![Pull Requests](https://img.shields.io/github/issues-pr/Prefinem/afpf.svg)

![Dependencies](https://david-dm.org/Prefinem/afpf.svg) ![Dev Dependencies](https://david-dm.org/Prefinem/afpf/dev-status.svg)

afpf is a set of functions that make it easy to write functional scripts with async / await support

# NOTICE

These docs are awful. If you are interested in using one of the library and need some help, please create an issue and I will work on the docs for that first. Thanks

# Getting Started

**ES6 Imports**

```js
cosnt afpf = require('afpf');

cosnt fn1 = () => console.log('Function 1');
const fn2 = () => console.log('Function 2');

const run = afpf.pipe(fn1, fn2)();
```

# Installation

    yarn add afpf

or

    npm i afpf

# API Docs

[DOCS](https://github.com/Prefinem/afpf/blob/master/DOCS.md)
