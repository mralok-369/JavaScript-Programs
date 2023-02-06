console.log("Date Object : Date and time in JS");

let today = new Date();
// console.log(today);
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('june 13 1976');
// otherDate = new Date('09/16/1976'); // mm/dd/yy
console.log(otherDate);
let a;
a = otherDate.getDate();
a = otherDate.getDay();
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();  // no of all seconds
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
// console.log(a);
otherDate.setDate(21);
otherDate.setMonth(0);
otherDate.setFullYear(1998);
otherDate.setSeconds(15);
otherDate.setMinutes(30);
otherDate.setHours(8);
console.log(otherDate);