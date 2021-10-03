const camelCase = require("lodash.camelcase");
const { snakeCase } = require("../utils/case-converter");

/**
 * To Lower case object keys recursively
 * @param {Object} objectToCon
 */
module.exports.toLowerKeys = (objectToCon) => {
    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyLower = key.toLowerCase();
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key]) &&
                !(obj[key] instanceof Date)
            ) {
                res[keyLower] = recursive(obj[key]);
            } else {
                res[keyLower] = obj[key];
            }
        }
        return res;
    }

    return recursive(objectToCon);
};

/**
 * Upper case object keys recursively
 * @param {Object} objectToCon
 */
module.exports.toUpperKeys = (objectToCon) => {
    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyUpper = key.toUpperCase();
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key]) &&
                !(obj[key] instanceof Date)
            ) {
                res[keyUpper] = recursive(obj[key]);
            } else {
                res[keyUpper] = obj[key];
            }
        }
        return res;
    }

    return recursive(objectToCon);
};

/**
 * Camel case object keys recursively
 * @param {Object} objectToCon
 */
module.exports.toCamelKeys = (objectToCon) => {
    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keyCamel = camelCase(key);
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key]) &&
                !(obj[key] instanceof Date)
            ) {
                res[keyCamel] = recursive(obj[key]);
            } else {
                res[keyCamel] = obj[key];
            }
        }
        return res;
    }

    return recursive(objectToCon);
};

/**
 * Snake case object keys recursively
 * @param {Object} objectToCon
 */
module.exports.toSnakeKeys = (objectToCon) => {
    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const keySnake = snakeCase(key);
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key]) &&
                !(obj[key] instanceof Date)
            ) {
                res[keySnake] = recursive(obj[key]);
            } else {
                res[keySnake] = obj[key];
            }
        }
        return res;
    }

    return recursive(objectToCon);
};

/**
 * Change object keys name  recursively
 * @param {Object} objectToCon
 * @param {Object} changedKeys
 */
module.exports.changeKeys = (objectToCon, changedKeys) => {
    function recursive(obj) {
        const res = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const newKey =
                changedKeys[key] == undefined ? key : changedKeys[key];
            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key]) &&
                !(obj[key] instanceof Date)
            ) {
                res[newKey] = recursive(obj[key]);
            } else {
                res[newKey] = obj[key];
            }
        }
        return res;
    }

    return recursive(objectToCon);
};
