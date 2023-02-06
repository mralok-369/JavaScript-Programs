// if else conditionals and switches in JS
const age = 65;
const vari = 34;

// if(age == 19){
//     console.log('Age is 19');
// }
// else if(age === 65) { // value and both are checked
//     console.log('Age is 65');
// } else {
//     console.log('Age is 19');
// }

// if(typeof vari !== 'undefined'){
//     console.log("Vari is defined");
// }
// else{
//     console.log('Vari is not defined');
// }

const doesDrive = true;

// if(doesDrive && age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You can not drive");
// }

// turnry operator
// console.log(age==45? 'Age is 45':'Age is not 45');

// switch statement
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 28:
        console.log("You are 28");
        break;
    case 38:
        console.log("You are 38");
        break;
    case 48:
        console.log("You are 48");
        break;
    default:
        console.log("You are greater than 18");
        break;
}