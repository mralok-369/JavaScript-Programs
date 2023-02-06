// Arrays and objects in JS
let marks = [34,56,67,98,67];
const fruits = ['Orange','Apple','Mango'];
const mixed = [23,'A',[78.5,"Hello"]];

const arr = new Array(23,123,21,'Orange');
// console.log(marks);
// console.log(marks[2]);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray('dgdg'));
arr[0] = 'Harry';
let arrElement = arr[3];
// console.log(arr);
// console.log(arrElement);

let val = marks.indexOf(98);
// console.log(val);

// mutating or modifying array
// marks.push(3656); // add element in end
// marks.unshift(1009);
// marks.pop();
// marks.shift();
// marks.splice(2,3);
// marks.reverse();

let marks2 = [1,2,3,7];
marks = marks.concat(marks2);
// console.log(marks);

// objects 
let myobj = {
    'first name': "Alok",
    channel: "codeGalaxy",
    isActive: true,
    mark: [1,5,3,6],
}
console.log(myobj);
console.log(myobj.mark);
console.log(myobj['first name']);