console.log("Regular Expression & releated functions");
// let reg = /harry/; // this is regular expression literal in js
let reg = /harry/g; // g means global
// let reg = /harry/i;  // i means case insensitive

console.log(reg);
console.log(reg.source);

// let s = "This is great code with harry";
let s = "This is great code with harry and also harry bhai";
// let s = "This is great code with harrt and also harRy bhai";
// functions to match expression
// 1. exec() - this function will return an array for match or null for no match
let result = reg.exec(s);
if (result) {
    console.log(result);  // print harry with index 24
    console.log(result.input);
    console.log(result.index);  // print harry index 24
}
// result = reg.exec(s);  // for reading second harry we use a global flag 'g' in reg exp
// console.log(result);  // print harry index 39
// result = reg.exec(s);  // for reading third harry which is absent in above sentence
// console.log(result);  // print null bcoz it is not finding third harry in above string


// 2. test() = returns true or false 
let result2 = reg.test(s);
console.log(result2);  // this will only print true if the reg is there in the 
let reg2 = /harrt/g;
result2 = reg2.test(s);
console.log(result2); 

// 3. match() = it will return an array of results or null
// let result3 = reg.match(s)  // this is wrong
let result3 = s.match(reg); // this is right
console.log(result3);

// 4. search() = returns index of first match else false
// let result4 = reg.search(s); // this is wrong
let result4 = s.search(reg); // this is right
console.log(result4);
let reg4= /harrt/;
result4 = reg4.test(s);
console.log(result4); 

// 5. replace() = returns new replace string with all the replacement
let result5 = s.replace(reg,'ALOK');  // replace all harry bcoz it is global else it replace first match harry
console.log(result5);


// Quiz
/*  make a reg and string and run all the five above functions */