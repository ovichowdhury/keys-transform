const camelCase = require("lodash.camelcase");
const { snakeCase } = require("../utils/case-converter");



const isObject = (val) => {
    if (
        val &&
        typeof val === "object" &&
        !Array.isArray(val) &&
        !(val instanceof Date)
    ) return true;
    return false;
}

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
            if (isObject(obj[key])) {
                res[keyLower] = recursive(obj[key]);
            }
            else if (Array.isArray(obj[key])) {
                res[keyLower] = obj[key].map(item => {
                    if (Array.isArray(item)) return item.map(el => {
                        return isObject(el) ? recursive(el) : el;
                    })
                    return isObject(item) ? recursive(item) : item;
                })
            }
            else {
                res[keyLower] = obj[key];
            }
        }
        return res;
    }

    if (Array.isArray(objectToCon)) {
        return objectToCon.map(item => {
            return isObject(item) ? recursive(item) : item;
        })
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
            if (isObject(obj[key])) {
                res[keyUpper] = recursive(obj[key]);
            }
            else if (Array.isArray(obj[key])) {
                res[keyUpper] = obj[key].map(item => {
                    if (Array.isArray(item)) return item.map(el => {
                        return isObject(el) ? recursive(el) : el;
                    })
                    return isObject(item) ? recursive(item) : item;
                })
            }
            else {
                res[keyUpper] = obj[key];
            }
        }
        return res;
    }

    if (Array.isArray(objectToCon)) {
        return objectToCon.map(item => {
            return isObject(item) ? recursive(item) : item;
        })
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
            if (isObject(obj[key])) {
                res[keyCamel] = recursive(obj[key]);
            }
            else if (Array.isArray(obj[key])) {
                res[keyCamel] = obj[key].map(item => {
                    if (Array.isArray(item)) return item.map(el => {
                        return isObject(el) ? recursive(el) : el;
                    })
                    return isObject(item) ? recursive(item) : item;
                })
            }
            else {
                res[keyCamel] = obj[key];
            }
        }
        return res;
    }

    if (Array.isArray(objectToCon)) {
        return objectToCon.map(item => {
            return isObject(item) ? recursive(item) : item;
        })
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
            if (isObject(obj[key])) {
                res[keySnake] = recursive(obj[key]);
            }
            else if (Array.isArray(obj[key])) {
                res[keySnake] = obj[key].map(item => {
                    if (Array.isArray(item)) return item.map(el => {
                        return isObject(el) ? recursive(el) : el;
                    })
                    return isObject(item) ? recursive(item) : item;
                })
            }
            else {
                res[keySnake] = obj[key];
            }
        }
        return res;
    }

    if (Array.isArray(objectToCon)) {
        return objectToCon.map(item => {
            return isObject(item) ? recursive(item) : item;
        })
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
            const newKey = changedKeys[key] == undefined ? key : changedKeys[key];
            if (isObject(obj[key])) {
                res[newKey] = recursive(obj[key]);
            }
            else if (Array.isArray(obj[key])) {
                res[newKey] = obj[key].map(item => {
                    if (Array.isArray(item)) return item.map(el => {
                        return isObject(el) ? recursive(el) : el;
                    })
                    return isObject(item) ? recursive(item) : item;
                })
            }
            else {
                res[newKey] = obj[key];
            }
        }
        return res;
    }

    if (Array.isArray(objectToCon)) {
        return objectToCon.map(item => {
            return isObject(item) ? recursive(item) : item;
        })
    }
    return recursive(objectToCon);
};

/**
 * String case conversion
 * 
 */
module.exports.toSnakeCase = (key) => {
    return snakeCase(key);
} 

module.exports.toCamelCase = (key) => {
    return camelCase(key);
}
