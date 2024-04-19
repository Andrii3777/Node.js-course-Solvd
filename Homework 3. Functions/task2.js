// Task 2: Function Composition and Point-Free Style

function getFullName({ firstName, lastName }) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return `${firstName} ${lastName}`;
}

// Custom utility compose function
const compose = (...funcs) => x => funcs.reduce((acc, func) => func(acc), x);

// filterUniqueWords()
const splitWords = text => text.match(/[\w\-']+/g); // includes words with hyphen and apostrophe
const filterUnique = words => [...new Set(words)];
const sortAlphabetically = words => words.sort((a, b) => a.localeCompare(b));
const filterUniqueWords = compose(splitWords, filterUnique, sortAlphabetically);

// getAverageGrade()
const getGradesArr = students => students.flatMap(student => student.grades);
const getAverage = grades => grades.reduce((acc, cur) => acc + cur) / grades.length;
const getAverageGrade = compose(getGradesArr, getAverage);

module.exports = { getFullName, filterUniqueWords, getAverageGrade };