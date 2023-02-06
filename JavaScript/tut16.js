console.log("Creating Removing & Replacing Elements in JS");
let element = document.createElement('li');
let text = document.createTextNode("I am a text node");
element.appendChild(text);
// add a class name to created element li
element.className = 'childul'; 
element.id = 'createdLi';
element.setAttribute('title','mytitle');
// element.innerText = 'Hello this is created by alok';
// element.innerHTML = '<b>Hello this is created by alok</b>';

// console.log(element);

let ul = document.querySelector("ul.this");
ul.appendChild(element); //adding element in ul
// console.log(ul);


// replacing element using JS
let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode('This is created node for elem2');
elem2.appendChild(tnode);

// console.log(elem2);
element.replaceWith(elem2);

let myul = document.getElementById("myul");
myul.replaceChild(element,document.getElementById('fui'));

myul.removeChild(document.getElementById("lui"));// removing element
// let pr = elem2.getAttribute('id');
let pr = elem2.hasAttribute('class');
elem2.removeAttribute('id');
elem2.setAttribute('title','myelem2title');
// console.log(elem2,pr);


// quiz: create a heading elemet with text as 'go to CodeWithHarry' and create an a tag outside it with href = 'https://www.codewithharry.com'

let a = document.createElement('a');
a.setAttribute("href","https://www.codewithharry.com")

let h3 = document.createElement('h3');
h3.innerText = "Go to codewithHarry";

a.appendChild(h3);
console.log(a);

let quiz = document.getElementById("quiz");
quiz.appendChild(a);
console.log(quiz);  // completed
