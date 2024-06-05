# <div align="center">Documentation</div>

### Task
This project implements a JSON parser in JavaScript called myJSONParse. The function takes a JSON-formatted string as input and returns the corresponding JavaScript object. The implementation uses regular expressions to tokenize and parse the input string, providing a detailed understanding of JSON structure and handling common JSON syntax errors gracefully.

### Features
1. **Tokenization**: Utilizes regular expressions to identify JSON elements such as objects, arrays, strings, numbers, booleans, and null.
2. **Parsing**: Constructs the corresponding JavaScript object by processing the tokens generated.
3. **Error Handling**: Detects and reports common JSON syntax errors with informative messages.
4. **Testing**: Thoroughly tested with various JSON strings to ensure correctness.

### Tokenization
The function uses regular expressions to identify different JSON structures:

```jsx
const objectRegex = /^\s*\{/;
const arrayRegex = /^\s*\[/;
const stringRegex = /^\s*"((\\")|[^"])+"|^\s*""/;
const numberRegex = /^\s*-?\d+(\.\d+)?([eE][+-]?\d+)?/;
const booleanRegex = /^\s*(true|false)/;
const nullRegex = /^\s*null/;
```
Let's explain the two most difficult ones regular expressions.
#### stringRegex
```jsx
const stringRegex = /^\s*"((\\")|[^"])+"|^\s*""/;
```
 - ^\s*: Matches any leading whitespace at the start of the string.
 - `"((\")|[^"])+": Matches a double quote followed by:
 - (\\"): An escaped quote (e.g., \").
 - |: OR
 - [^"])+: Any character except a double quote, one or more times.
 - ": Matches the closing double quote.
 - |: OR
 - ^\s*"": Matches an empty string with any leading whitespace.

#### numberRegex
```jsx
const numberRegex = /^\s*-?\d+(\.\d+)?([eE][+-]?\d+)?/;
```

 - ^\s*: Matches any leading whitespace at the start of the string.
 - -?: Optionally matches a negative sign.
 - \d+: Matches one or more digits.
 - (\.\d+)?: Optionally matches a decimal point followed by one or more digits.
 - ([eE][+-]?\d+)?: Optionally matches scientific notation:
 - [eE]: Matches e or E.
 - [+-]?: Optionally matches a positive or negative sign.
 - \d+: Matches one or more digits.

### Parsing Functions
The parser includes several helper functions to handle different JSON elements:

1. **identifyJSONElement**: Identifies the JSON element and calls the corresponding parsing function.
2. **parseObject**: Parses JSON objects.
3. **parseArray**: Parses JSON arrays.
4. **parseString**: Parses JSON strings.
5. **parseNumber**: Parses JSON numbers.
6. **parseBoolean**: Parses JSON booleans.
7. **parseNull**: Parses JSON null.

### Error Handling
The parser ensures that any syntax errors are detected and reported with informative messages, enhancing the robustness of the function.

### Reflection
#### Challenges
Implementing a JSON parser using regular expressions presented several challenges:

 - Complexity of JSON Structures: Handling nested structures like objects and arrays required careful design of the parsing logic.
 - Escape Sequences: Properly processing escape sequences within strings added another layer of complexity.
 - The most difficult thing for me was writing a parseString() function.

#### Solutions
To address these challenges, the implementation included:
 - Modular helper functions for different JSON elements, making the code more organized and easier to debug.
 - Comprehensive regular expressions to accurately identify and tokenize JSON elements.
 - The solution for implementation parseString() function involved a combination of a comprehensive regular expression for string identification and detailed parsing logic to handle escape sequences and Unicode characters accurately. This ensured the function could reliably parse JSON strings while handling errors effectively.
 - Detailed error messages to inform the user of any syntax issues.