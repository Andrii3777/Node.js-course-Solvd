"use strict";
// Task 3: Multiline Tagged Template

function multiline(strings, ...expressions) {
    const template = expressions.reduce((acc, exp, index) => {
        return acc + exp + strings[index + 1];
    }, strings[0]);

    const strArr = template.trim().split('\n');
    const numberedStrArr = strArr.map((str, index) => (index + 1) + ' ' + str);

    return numberedStrArr.join('\n');
}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"