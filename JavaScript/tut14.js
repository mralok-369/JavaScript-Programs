console.log("This is tutorial 14");
/*
    element selectors:
    1. Single element selector
    2. Multi element selector

*/
// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Alok is a Good boy";
element.innerHTML = "<b>Alok is a Good boy</b>";
// console.log(element.innerHTML);
// console.log(element.innerText);


let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child"); //get first element of that class name
sel = document.querySelector("h1");
sel = document.querySelector("div");
sel.style.color = 'green';
// console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('child'));
// console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
// }

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});