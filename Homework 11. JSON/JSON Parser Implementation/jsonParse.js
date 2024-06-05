/**
 * Function that takes a JSON-formatted string as input and returns
 * the corresponding JavaScript object
 * @param {*} jsonString a JSON-formatted string
 * @returns returns the corresponding JavaScript object
 */
function myJSONParse(jsonString) {
    if (jsonString.length === 0) throw new SyntaxError("Empty JSON string");

    // Regular expressions to identify different JSON structures
    const objectRegex = /^\s*\{/;
    const arrayRegex = /^\s*\[/;
    const stringRegex = /^\s*"((\\")|[^"])+"|^\s*""/;
    const numberRegex = /^\s*-?\d+(\.\d+)?([eE][+-]?\d+)?/;
    const booleanRegex = /^\s*(true|false)/;
    const nullRegex = /^\s*null/;

    // Helper function to identify and parse JSON element
    function identifyJSONElement() {
        if (objectRegex.test(jsonString)) return parseObject();
        else if (arrayRegex.test(jsonString)) return parseArray();
        else if (stringRegex.test(jsonString)) return parseString();
        else if (numberRegex.test(jsonString)) return parseNumber();
        else if (booleanRegex.test(jsonString)) return parseBoolean();
        else if (nullRegex.test(jsonString)) return parseNull();
        else throw new SyntaxError("Unexpected token: " + jsonString[0]);
    }

    // Helper function to parse objects
    function parseObject() {
        jsonString = jsonString.replace(/^\s*\{/, ''); // remove '{' and trim

        const obj = {};
        while (!/^\s*\}/.test(jsonString)) { // runs until a closing bracket '}' is encountered
            jsonString = jsonString.replace(/^\s*,/, ''); // remove ',' and trim

            const key = parseString(); // get obj key

            if (!/^\s*:/.test(jsonString)) throw new SyntaxError("Expected ':' after key");

            jsonString = jsonString.replace(/^\s*:/, '').trim(); // remove ':' and trim
            obj[key] = identifyJSONElement(); // add new key/value to object
            if (!/^\s*(,|\})/.test(jsonString)) throw new SyntaxError("Expected ',' or '}' in object!");
        }

        jsonString = jsonString.replace(/^\s*\}/, ''); // remove closing '}' and trim
        return obj;
    }

    // Helper function to parse arrays
    function parseArray() {
        jsonString = jsonString.replace(/^\s*\[\s*/, ''); // remove opening '[' and trim

        const arr = [];
        while (!/^\s*\]/.test(jsonString)) { // runs until a closing bracket ']' is encountered
            jsonString = jsonString.replace(/^\s*,\s*/, ''); // remove ',' and trim
            arr.push(identifyJSONElement()); // add new value to array
            if (!/^\s*(,|\])/.test(jsonString)) throw new SyntaxError("Expected ',' or ']' in array!");
        }

        jsonString = jsonString.replace(/^\s*\]/, ''); // remove closing ']' and trim
        return arr;
    }

    // Helper function to parse strings
    function parseString() {
        let match = jsonString.match(stringRegex);

        if (!match) throw new SyntaxError("Unexpected token: " + jsonString[0]);

        // Extract the matched string, trim any surrounding whitespace, and remove the surrounding quotes.
        let str = match[0].trim().slice(1, -1);

        // Replace escape sequences within the string.
        str = str.replace(/\\(u[0-9a-fA-F]{4}|["\\/bfnrt])/g, (_, match) => {
            if (match.startsWith('u')) { // Check if the escape sequence is a Unicode escape sequence.
                // Convert the Unicode escape sequence to the corresponding character.
                return String.fromCharCode(parseInt(match.substr(1), 16));
            } else { // Handle regular escape sequences.
                switch (match) {
                    case '"':
                    case '\\':
                    case '/':
                        return match; // Return the escape character itself for quotes, backslashes, and slashes.
                    case 'b':
                        return '\b'; // Convert '\b' to a backspace character.
                    case 'f':
                        return '\f'; // Convert '\f' to a form feed character.
                    case 'n':
                        return '\n'; // Convert '\n' to a newline character.
                    case 'r':
                        return '\r'; // Convert '\r' to a carriage return character.
                    case 't':
                        return '\t'; // Convert '\t' to a tab character.
                    default:
                        // If the escape sequence is not recognized, throw a syntax error.
                        throw new SyntaxError("Unexpected escape sequence: \\" + match);
                }
            }
        });

        jsonString = jsonString.replace(stringRegex, '').trim(); // remove the matched string and trim

        return str;
    }

    // Helper function to parse numbers
    function parseNumber() {
        const numStr = jsonString.match(numberRegex)[0];
        if (!numStr) throw new SyntaxError("Unexpected token: " + jsonString[0]);

        jsonString = jsonString.replace(numberRegex, '').trim(); // remove matched number and trim
        return parseFloat(numStr);
    }

    // Helper function to parse booleans
    function parseBoolean() {
        const boolStr = jsonString.match(booleanRegex)[0];
        if (!boolStr) throw new SyntaxError("Unexpected token: " + jsonString[0]);

        jsonString = jsonString.replace(booleanRegex, '').trim(); // remove matched boolean and trim
        return boolStr.trim() === 'true';
    }

    // Helper function to parse null
    function parseNull() {
        const nullStr = jsonString.match(nullRegex)[0];
        if (!nullStr) throw new SyntaxError("Unexpected token: " + jsonString[0]);

        jsonString = jsonString.replace(nullRegex, '').trim(); // remove matched null and trim
        return null;
    }

    const res = identifyJSONElement();

    // edge case: check if we have only one string, boolean or null element
    if (jsonString) throw new SyntaxError("Unexpected token: " + jsonString[0]);
    else return res;
}

module.exports = myJSONParse;