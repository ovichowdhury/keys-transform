const camelCase = require('lodash.camelcase');


function snakeCase(str) {
    const camel = camelCase(str);
    const snake = camel.replace(/[A-Z]/g, (match) => {
        return `_${match.toLowerCase()}`;
    })

    return snake;
}


module.exports = {
    snakeCase: snakeCase
}