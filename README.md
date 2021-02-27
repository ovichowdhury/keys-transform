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
const {toLowerKeys, toUpperKeys, toCamelKeys, toSnakeKeys} = require('keys-transform');

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

console.log(toLowerKeys(obj));

console.log(toUpperKeys(obj));

console.log(toCamelKeys(obj));

console.log(toSnakeKeys(obj));

  
```

## Stay in touch

- Author - [Nahid Chowdhury](https://bd.linkedin.com/in/nahid-chowdhury)


## License

Keys-Transform is [MIT licensed](LICENSE).
