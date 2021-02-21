const {toLowerKeys, toUpperKeys, toCamelKeys} = require('../lib/index');

function main() {
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
}
main();