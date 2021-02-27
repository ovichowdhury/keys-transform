const camelCase = require('lodash.camelcase');
const { snakeCase } = require('../utils/case-converter');
/**
 * To Lower case object keys recursively
 */
module.exports.toLowerKeys = (objectToCon) => {

    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyLower = key.toLowerCase();
            if (obj[key]
                && typeof obj[key] === "object"
                && !Array.isArray(obj[key])
            ) {
                res[keyLower] = recursive(obj[key])
            }
            else {
                res[keyLower] = obj[key];
            }
        }
        return res;

    }

    return recursive(objectToCon);

}

/**
 * Upper case object keys recursively
 */
module.exports.toUpperKeys = (objectToCon) => {

    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyUpper = key.toUpperCase();
            if (obj[key]
                && typeof obj[key] === "object"
                && !Array.isArray(obj[key])
            ) {
                res[keyUpper] = recursive(obj[key])
            }
            else {
                res[keyUpper] = obj[key];
            }
        }
        return res;

    }

    return recursive(objectToCon);

}


/**
 * Camel case object keys recursively
 */
module.exports.toCamelKeys = (objectToCon) => {

    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyCamel = camelCase(key);
            if (obj[key]
                && typeof obj[key] === "object"
                && !Array.isArray(obj[key])
            ) {
                res[keyCamel] = recursive(obj[key])
            }
            else {
                res[keyCamel] = obj[key];
            }
        }
        return res;

    }

    return recursive(objectToCon);

}

/**
 * Snake case object keys recursively
 */
module.exports.toSnakeKeys = (objectToCon) => {

    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keySnake = snakeCase(key);
            if (obj[key]
                && typeof obj[key] === "object"
                && !Array.isArray(obj[key])
            ) {
                res[keySnake] = recursive(obj[key])
            }
            else {
                res[keySnake] = obj[key];
            }
        }
        return res;

    }

    return recursive(objectToCon);

}