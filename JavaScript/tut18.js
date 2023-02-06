// more on javascript event
console.log("More on JavaScript Events");
// let btn = document.getElementById("btn");
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// // btn.addEventListener('mousedown',func3);

// function func1(e){
//     console.log('Thanks',e);
//     e.preventDefault();
// }

// function func2(e){
//     console.log('Thanks for double click',e);
//     e.preventDefault();
// }

// function func3(e){
//     console.log('Thanks for Mouse down',e);
//     e.preventDefault();
// }

// document.querySelector(".no").addEventListener('mouseenter',function(){

//     console.log("You enterned no");
// })

// document.querySelector(".no").addEventListener('mouseleave',function(){

//     console.log("You exited no");
// })

document.querySelector(".container").addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
    console.log("You triggred mouse move event");
})