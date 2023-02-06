console.log("Prototype Inheritence in JS");

const proto = {
    slogan: function () {
        return 'This company is best';
    },
    changeName: function (newName) {
        this.name = newName;
    }
}
/*
// This create harry object
const harry = Object.create(proto);
harry.name = 'Harry';
harry.role = 'Programmer';
*/
// This also create harry object
const harry = Object.create(proto, {
    name: { value: 'Harry', writable: true },
    role: { value: 'Programmer' },
})

harry.changeName("Alok");
// console.log(harry);


// Employee constructor
function Employee(Name, Salary, Experience) {
    this.Name = Name;
    this.Salary = Salary;
    this.Experience = Experience;
}

// slogan
Employee.prototype.slogan = function () {
    return `This company is best. ragards, ${this.Name}`;
}
let alok = new Employee("Harry", 512542, 15);
// console.log(alok);
// console.log(alok.slogan());

// programmer connstructor
function Programmer(Name, Salary, Experience, Language) {
    Employee.call(this, Name, Salary, Experience);
    this.Language = Language;
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Rohan = new Programmer('Rohan', 2, 0, 'JavaScript');
console.log(Rohan);


// quiz 
// create food object floor  and make a cake class by inherit food 