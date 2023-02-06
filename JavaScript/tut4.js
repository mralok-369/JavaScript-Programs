/*
 datatypes in js
 primitive datatype (memory aloocation in stack)
    string numbers booleans null undefined symbol
 reference datatype (memory allocation in heap dynamically)
    arrays,Object literals, functions,dates
*/
// string
let Name = 'Alok kumar';
console.log('My string is',Name);
console.log('Data type is',typeof(Name));

// numbers
let marks = 34;
let marks1 = 45.56;
console.log(marks);
console.log(marks1);
console.log('Data type is',typeof(marks1));

//booleans
let isDriver = true;
console.log(isDriver);
console.log('Data type is',typeof(isDriver));

// null
let nullVar = null;
console.log(nullVar);
console.log('Data type is',typeof(nullVar));

// undefined
let undef = undefined;
console.log(undef);
console.log('Data type is',typeof(undefined));

// reference data types
//arrays
myarr = [1,2,3,4,5];
console.log(myarr);
console.log('Data type is',typeof(myarr));

// object literals
let stdMarks = {
    harry: 89,
    shubham: 36,
    rohan :56
}
console.log(stdMarks);
console.log('Data type is',typeof(stdMarks));

// functions
function findName(){

}
console.log('Data type is',typeof(findName));

// date datatype
let date = new Date();
console.log('Data type is',typeof(date));