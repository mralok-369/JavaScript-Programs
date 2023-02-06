console.log('Async/Await in JavaScript');

async function harry() {
    console.log("Inside harry function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("users resolved");
    return users;
    // return harry;
}
// when function reach at await it send function back for completing others task and when that task was completed it returns to the await and execute the further lines
console.log("Before calling harry");
let a = harry();
console.log("Afterd calling harry");
console.log(a);
a.then(data => console.log(data))
console.log("last line of js file");