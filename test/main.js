const {
    toLowerKeys,
    toUpperKeys,
    toCamelKeys,
    toSnakeKeys,
    changeKeys,
} = require("../lib/index");

function main() {
    const date = new Date();
    const obj = [
        {
            NAME_ME: "Nahid Chowdhury",
            AGE: 26,
            hobby: ["Coding", "singing"],
            job: {
                professional: "engineer",
                personal: null,
            },
            planet_Belongs: undefined,
            nesT: {
                dummy_me: {
                    hellO: "world",
                },
            },
            date_test: date,
        },
        {
            NAME_ME: "Md. Raju Ahmed",
            AGE: 26,
            hobby: ["Coding", "singing"],
            job: {
                professional: "engineer",
                personal: null,
            },
            planet_Belongs: undefined,
            nesT: {
                dummy_me: {
                    hellO: "world",
                },
            },
            date_test: date,
        },
    ];

    console.log(toLowerKeys(obj));

    console.log(toUpperKeys(obj));

    //array of object
    console.log(toCamelKeys(obj));
    //object
    console.log(toCamelKeys(obj[0]));

    console.log(toSnakeKeys(obj));

    console.log(
        changeKeys(obj, {
            NAME_ME: "name",
            professional: "occupation",
        })
    );
}
main();
