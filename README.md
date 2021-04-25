<h1 align="center">
  Keys Transform
</h1>
  
## Features

1. Recursive Object Keys Transformation to Lower, Upper, Camel and Snake Case
2. Typescript Support

## Installation

```bash
$ npm install keys-transform
```

```bash
$ yarn add keys-transform
```


## Code Example

```js
const {toLowerKeys, toUpperKeys, toCamelKeys, toSnakeKeys, changeKeys} = require('keys-transform');

const obj = {
    "NAME_ME": "Nahid Chowdhury",
    "AGE": 26,
    "hobby": ["Coding", "singing"],
    "job": {
        "professional": "engineer",
        "personal": null
    },
    "planet_Belongs": undefined,
    "nesT": {
        "dummy_me": {
            "hellO": "world"
        }
    }
}

/**
 * Lower case object keys recursively
 * @param {Object} objectToCon
 */
console.log(toLowerKeys(obj));

/**
 * Upper case object keys recursively
 * @param {Object} objectToCon
 */
console.log(toUpperKeys(obj));

/**
 * Camel case object keys recursively
 * @param {Object} objectToCon
 */
console.log(toCamelKeys(obj));

/**
 * Snake case object keys recursively
 * @param {Object} objectToCon
 */
console.log(toSnakeKeys(obj));

/**
 * Change object keys name recursively
 * @param {Object} objectToCon
 * @param {Object} changedKeys
 */
console.log(changeKeys(obj, {
    "NAME_ME": "name",
    "professional": "occupation"
}));

  
```

## Stay in touch

- Author - [Nahid Chowdhury](https://bd.linkedin.com/in/nahid-chowdhury)


## License

Keys-Transform is [MIT licensed](LICENSE).
