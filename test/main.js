const { toSnakeCase, toCamelCase } = require("../lib");
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
        {name: "nahid", AGE: 10, fatherName: "nahid", mother_name: "nahid"},
        {name: "nahid", AGE: 10},
        {name: "nahid", AGE: 10},
        {name: "nahid", AGE: 10, hobby: [[{HELLO_: "world"}], [{WORLD: "hello"}], {date: date}, [[{name_sSake: "ovi"}]]]},
        "hello world",
        date
    ]

    // console.log(JSON.stringify(toLowerKeys(obj), null, 4));

    // console.log(JSON.stringify(toUpperKeys(obj), null, 4));

    // console.log(JSON.stringify(toCamelKeys(obj), null, 4));

    // console.log(JSON.stringify(toSnakeKeys(obj), null, 4));

    // console.log(
    //     changeKeys(obj, {
    //         name: "name_me",
    //         professional: "occupation",
    //     })
    // );

    console.log(toSnakeCase("myName"));
    console.log(toCamelCase("my_name"));
}
main();
