// foe, while & do while loop in JavaScript

// for loop 
// for(let i=0; i<20; i++)
// {
//     console.log(i);
// }

// while loop
// let j=0;
// while(j<20)
// {
//     console.log(j+1);
//     j++;
// }

// do while loop
//  let k = 0;
//  do {
//     console.log(k+1);
//     k++;
//  } while(k<10);

// let k = 0;
// do {
//    if(k===5){
//        k+=1;
//        continue;
//    }
//    console.log(k+1);
//    k++;
// } while(k < 10);
// console.log('done');

let arr = [2,5,6,7,8,3,4,8];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

// for loop with object
let obj = {
    name: "Alok kumar",
    age: 22,
    type: 'dangerous programmer',
    os: 'ubuntu',
}
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
}