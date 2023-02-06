console.log('ES6 Classes and Inheritence');

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.Name = givenName;
        this.Experience = givenExperience;
        this.Division = givenDivision;
    }
    slogan() {
        return `I'm ${this.Name} and this company is the best`;
    }
    joiningYear() {
        return 2020 - this.Experience;
    }
    // useof any function without using classes
    static add(a, b) {
        return a + b;
    }
}

// harry = new Employee('Harry', 15, 'First');
// console.log(harry);
// console.log(harry.joiningYear());
// console.log(Employee.add(34,5));


// Inherit programer by employee class
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, Language, github) {
        super(givenName, givenExperience, givenDivision);
        this.Language = Language;
        this.github = github;
    }
    favouriteLangauge() {
        if (this.Language == 'python') {
            return 'python';
        }
        else {
            return 'JavaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
let Rohan = new Programmer("Rohan", 3, 'Lays', 'Ruby', 'Rohan420');
console.log(Rohan);
console.log(Rohan.favouriteLangauge());
console.log(Programmer.multiply(4, 5));