// variables in javaScript
// var let const
var name = `al"ooo'kkk` // global scope
var channel;
channel = 'CodeWithHarry';
var marks = 34;

// console.log(name);
// console.log(channel);
console.log(name,channel,marks);
/*  rules for creating javascript variables
    1. Cannot start with numbers
    2. can start with letters nunumbers and underscores or $
    3. Are case sensetive
*/
var city = 'delhi';
console.log(city);

const ownersName = 'Hari ram';// const are not changable
const fruit = 'Apple';
console.log(ownersName,fruit);

{
    let city = 'Rampur'; // block scope
    city = 'kolkata'
    console.log(city);
}
console.log(city);

const arr1 = [12,52,62,45]; //array datatype
// arr1.push(48);
console.log(arr1);

/* 
most common programming case types:
1. cammelcase = cammelcase
2. kababcase = kabab-case
3. snakecase = snake_case
4. pascalecase = PascalCase

*/