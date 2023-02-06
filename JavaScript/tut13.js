// Webpage Crawler in JS

// Excercise 1
// you have to create a variable which is a string conatining the text is a link you are intersted in

// you have to fetch all the links from a given page which contains this Text

// codewithharry.com
// javascript

// solution of excercise 1
let str = 'python';
let links = document.links;
console.log(links);

let href;
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
})