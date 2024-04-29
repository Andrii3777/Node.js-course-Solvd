"use strict";
// Task 2: Advanced Tagged Template

function highlightKeywords(template, keywords) {
    const className = 'highlight';

    return template.replace(/\${(\d+)}/g, (substr, keyIndex) => {
        return `<span class='${className}'>${keywords[keyIndex] || ''}</span>`;
    });
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
/*
    Expected: "Learn <span class='highlight'>JavaScript</span>
    tagged templates to create custom <span class='highlight'>template</span>
    literals for <span class='highlight'>tagged</span> manipulation."
*/