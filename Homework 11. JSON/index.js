const myJSONParse = require('./JSON Parser Implementation/jsonParse');
const tests = require('./JSON Parser Implementation/tests');

let customParseRes;
let originalParseRes;

const isEqual = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

for (const test of tests) {
    customParseRes = myJSONParse(test);
    originalParseRes = JSON.parse(test);
    console.log("Is str correctly parsed?:", isEqual(customParseRes, originalParseRes), '\n');

    // console.log(myJSONParse(test)); // uncomment this line to see parsed results
}