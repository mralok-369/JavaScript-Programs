console.log('Object oriented javascript : object literals , constructors');

// objectliteral for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function run() {
        console.log("car is running");
    }
}
// we have already seen constructors like this
// new Date();

// creating a constructor for a cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} kmph than Mercedes`)
    }
}
car1 = new GeneralCar('Nishan', 180);
car2 = new GeneralCar('Maruti Alto', 80);
car3 = new GeneralCar('Mercedes', 200);
console.log(car3);