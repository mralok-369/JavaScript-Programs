console.log("Arrow function in JS");

// ARROW FUNCTION

// creating a regular function
// const harry = function() {
//     console.log("This is the best person ever");
// }

// converting it into an arraow function
// const harry = () => {
//     console.log("This is the best person ever");
// }
// harry();

// function returning something
// const greet = function() {
//     return "Good Morning";
// }

// one liners do not requires return/braces
// one line will automaticcaly return 
// const greet = () => "Good Morning";

// const greet = () => ({name: 'harry'});

// passing one argument without parathensis
// const greet = name => "Good Morning " + name;
// console.log(greet("ALOK"));

// passing more than one arg we use parethensis
const greet = (name, ending) => "Good Morning " + name + ending;

console.log(greet("ALOK", " Bye"));