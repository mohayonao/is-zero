# is-zero
[![Build Status](http://img.shields.io/travis/mohayonao/is-zero.svg?style=flat-square)](https://travis-ci.org/mohayonao/is-zero)
[![NPM Version](http://img.shields.io/npm/v/is-zero.svg?style=flat-square)](https://www.npmjs.org/package/is-zero)
[![Bower](http://img.shields.io/bower/v/is-zero.svg?style=flat-square)](http://bower.io/search/?q=is-zero)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)
> is ±0 ?

## Installation

npm:

```
npm install is-zero
```

bower:

```
bower install is-zero
```

downloads:

- [is-zero.js](https://raw.githubusercontent.com/mohayonao/is-zero/master/lib/is-zero.js)

## API

- `is0.isZero(x: number): boolean`
- `is0.isPositiveZero(x: number): boolean`
- `is0.isNegativeZero(x: number): boolean`

## Example

```js
var is0 = require("is-zero");

console.log(is0.isZero(+0)); // => true
console.log(is0.isZero(-0)); // => true
console.log(is0.isPositiveZero(+0)); // => true
console.log(is0.isPositiveZero(-0)); // => false
console.log(is0.isNegativeZero(+0)); // => false
console.log(is0.isNegativeZero(-0)); // => true
```

## License
MIT
