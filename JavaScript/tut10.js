// functions in JS
// scope
let i = 234; // Global scope
console.log(i);
function ui(name){
    let i = 9; // local scope
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Alex"),i);


// function greet(name,thank='Thank you'){
//     let msg = `Happy birthday ${name} how i wish i could fly to you right now and be with you on this special day of yours,but remembermy good wishes are always there with you,Happy birthday ${thank}`;
//      return msg;
// }

// let name = 'SkillF';
// let name1 = 'Rohan Das';

// // let val = greet(name1,'Thanks a lot');
// // console.log(val);

// const myobj = {
//     name: "skillf",
//     game: function(){  // function under a object
//         return 'GTA';
//     }
// }
// console.log(myobj.game());

// arr = ['fruit','vegetable','furniture'];
// arr.forEach(function(element,index,array) {
//     console.log(element,index);
// });
