# getPrecision()

Get the digits that are after the decimal point in a floating-point number e.g. the remainder. Works for some numbers with scientific notation, but needs more testing.

This function returns a `string` -- or `undefined` if the input is not a numerical value, because returning a `number` will result in automatic parsing with the JavaScript engine, resulting in a value that could be potentially in a scientific notation.

# How to use

This function can be used both in the browser and within the Node environment.

## Installation

**NPM**

`npm install get-precision`

## Import

**Node.js**

`import { getPrecision } from  "get-precision";`

# API

All of the following calls with a numerical input, result in a `string` value output from the function.

```
getPrecision(123)); // "0"
getPrecision(1.23)); // "0.23"
getPrecision(1.23e7)); //"0"
getPrecision(1.23e-7)); //"0.000000123"
getPrecision(123.456e-3)); //"0.123456"
```

All other calls with non-numerical inputs result in `undefined` being returned from the function.

```
getPrecision(undefined));
getPrecision(null));
getPrecision(true));
getPrecision("123"));
getPrecision([]));
getPrecision({}));
getPrecision((() => false)));
```
