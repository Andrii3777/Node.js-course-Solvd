const tests = [
    '{"name": "John", "age": 30, "city": "New York"}',
    `{
        "name": "John",
        "age": 20,
        "isStudent": true,
        "hasJob": false,
        "courses": [
            "Math",
            "Science"
        ],
        "grades": [
            11,
            1.5,
            -30,
            1000.3e-2
        ],
        "strings": [
            "\\u0048\\u0065\\u006C\\u006C\\u006F",
            "Café",
            "\\b \\f \\n \\r \\t",
            "",
            "line1\\nline2\\n\\tindented line",
            "She said, \\"Qello!\\" and then left."
        ],
        "address":   null
    }`,
    `{
        "person": {
            "name": "Alice",
            "age": 30,
            "address": {
                "street": "123 Main St",
                "city": "Wonderland"
            },
            "hobbies": [
                "reading",
                "painting"
            ]
        },
        "isEmployed": true,
        "salary": null
    }`,
    `{
        "string": "Hello, World!",
        "unicode": "\\u0041\\u0042\\u0043",
        "escapeSequences": "\\b \\f \\n \\r \\t \\\\ \\"",
        "number": 123.456,
        "boolean": false,
        "nullValue": null,
        "array": [1, "two", {"three": 3}],
        "object": {
            "nestedArray": [null, true, false, "text"]
        }
    }`,
    `{
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
                "menuitem": [
                    {"value": "New", "onclick": "CreateNewDoc()"},
                    {"value": "Open", "onclick": "OpenDoc()"},
                    {"value": "Close", "onclick": "CloseDoc()"}
                ]
            }
        },
        "colorsArray": [
            {"color": "red", "code": "#f00"},
            {"color": "green", "code": "#0f0"},
            {"color": "blue", "code": "#00f"},
            {"color": "cyan", "code": "#0ff"},
            {"color": "magenta", "code": "#f0f"},
            {"color": "yellow", "code": "#ff0"},
            {"color": "black", "code": "#000"}
        ]
    }`,
    `{
        "quotes": "She said, \\"Hello!\\" and then left.",
        "slashes": "\\\\ - this is a backslash:  ",
        "unicodeCharacters": "Café \\u00E9"
    }`,
    `{
        "title": "JSON Example",
        "description": "A simple example of JSON data.",
        "version": 1.0,
        "active": true,
        "tags": ["example", "json", "data"]
    }`,
    `{
        "strings": [
            "\\u0048\\u0065\\u006C\\u006C\\u006F",
            "Café",
            "\\b \\f \\n \\r \\t",
            "",
            "line1\\nline2\\n\\tindented line",
            "She said, \\"Hello!\\" and then left."
        ]
    }`,
];

module.exports = tests;