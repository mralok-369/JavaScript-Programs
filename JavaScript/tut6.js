// string properties , methods and template literals
const name = "Alok";
const greeting = "Good Morning";
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading </h1>" + 
        "<p> this is my para </p>";

html.concat('this');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[1]);
// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('this'));
// console.log(html.charAt(10));
// console.log(html.endsWith('str2'));
// console.log(html.includes('fg'));
// console.log(html.substring(0,10));
// console.log(html.slice(0,4));
// console.log(html.split(' '));
// console.log(html.replace('this','It'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `hello ${name}
            <h1> This is "My heading" </h1>
            <p> You like ${fruit1} and ${fruit2}
            `;
document.body.innerHTML = myHtml;

