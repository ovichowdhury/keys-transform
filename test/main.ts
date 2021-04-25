import {toLowerKeys, toUpperKeys, toCamelKeys, toSnakeKeys, changeKeys} from '../lib/index'; 

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

    console.log(toSnakeKeys(obj));

    console.log(changeKeys(obj, {
        "NAME_ME": "name",
        "professional": "occupation"
    }));
}
main();