# kr-numbers

Convert numbers to Korean representations (like "삼억육천오백만") in your JavaScript project.

## Demo

[Live Demo](https://devhudi.github.io/kr-numbers/)

## Installation

**Yarn**

```
$ yarn add kr-numbers
```

**NPM**

```
$ npm install kr-numbers
```

## Usage

### Basic

```javascript
import krNumbers from "kr-numbers";

const number = krNumbers(352043);
// 삼십오만이백사십삼
```

### Options

**Spacing**

Add space characters between units.

```javascript
import krNumbers from "kr-numbers";

const options = {
  spacing: true,
};

const number = krNumbers(352043, options);
// 삼십 오만 이천 사십 삼
```

**Mixed**

Returns a string expressed by mixing numbers and Korean.

```javascript
import krNumbers from "kr-numbers";

const options = {
  spacing: true,
  mixed: true,
};

const number = krNumbers(352043, options);
// 35만 2,043
```
