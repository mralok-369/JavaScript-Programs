// Local and Session storage in JS
console.log("Local & Session Storage");
let impArray = ['ginger', 'onion', 'ladyfingure'];


localStorage.setItem('Name', 'Alok');  // for set value
localStorage.setItem('Name2', 'Harry');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// localStorage.clear(); // clears the entire local storaage
// localStorage.removeItem('Name');  // remove a particular  key value pair from LS

let Name = localStorage.getItem('Name'); // for get value
Name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(Name);

// session storage cleared data after closing the browser
sessionStorage.setItem('Name', 'sAlok');  // for set value
sessionStorage.setItem('Name2', 'sHarry');
sessionStorage.setItem('Sabzi', JSON.stringify(impArray));
// sessionStorage.clear();