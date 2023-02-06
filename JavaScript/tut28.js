console.log('Object Prototype in JS');

// object literal: object.prototype
let obj1 = {
    name: 'Harry',
    channel: 'Code with Harry',
    address: 'Earth'
}

function obj(givenName){
    this.name = givenName
}
// always make your constructor and only change these prototype
obj.prototype.getName = function(){
    this.name;
}

obj.prototype.setName = function(newName){
    return this.name = newName;
}

let obj2 = new obj('Harry');
console.log(obj2);