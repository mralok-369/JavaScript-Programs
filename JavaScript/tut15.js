console.log('Chidren, Parent & Traversing the DOM');
let cont = document.querySelector(".no");
cont = document.querySelector(".container");

// console.log(cont.childNodes); // showing all elements and comments text etc
// console.log(cont.children); // show only elemnts

let nodename = cont.childNodes[1].nodeName;
let nodetype = cont.childNodes[0].nodeType;
// console.log(nodename);
// console.log(nodetype);
/*
    1.element
    2.attribute
    3.text node
    8.comment
    9.document
    10.docType
*/

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
