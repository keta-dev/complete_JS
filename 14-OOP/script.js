'use strict';

// Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Methods 
//   // Warning: This is a bad practice, you should never create a method in a constructor function
//   // rather you use prototypes
//   // this.calcAge = function () {
//   //   console.log(2038 - this.birthYear);
//   // };
// };

// const about = new Person('Miriam', 1991);
// const jonas = new Person('Jonas', 1993);
// // console.log(about, jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// // Prototypes
// // console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2038 - this.birthYear);
// };

// about.calcAge();
// jonas.calcAge();

// // Setting properties on prototypes
// Person.prototype.species = 'Home Sapiens';
// console.log(about.species, jonas.species);

// console.log(jonas.hasOwnProperty('firstName')); 

// will be false because the property is not in the jonas object, it has access because of the prototype
// console.log(jonas.hasOwnProperty('species'));

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// Prototypal Inheritance on Built-In Objects

// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// avoid doing this on a serious project
Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

// My Solution

// constructor function
// const Car = function(make, speed, brake) {
//   this.make = make;
//   this.speed = speed;
//   this.brake = brake;
// };

// Car.prototype.accelerate = function() {
//   console.log(`DATA CAR 1: ${this.make} going at ${this.speed += 10} km/h`);
// };

// Car.prototype.brakes = function() {
//   console.log(`DATA CAR 2: ${this.make} stopping at ${this.brake -= 5} km/h`);
// };

// const bmw = new Car("BMW", 100, 30);
// const Mercedes = new Car("Mercedes", 95, 40);
// console.log(bmw, Mercedes);
// bmw.accelerate();
// bmw.brakes();
// Mercedes.accelerate();
// Mercedes.brakes();

// Jonas Solution
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();


///////////////////////////////////////
// ES6 Classes
// Class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  };

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2030 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.name}!`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const babyNnenna = new PersonCl("Audrey", 2021);
console.log(babyNnenna);
babyNnenna.calcAge();

console.log(babyNnenna.__proto__ === PersonCl.prototype);
babyNnenna.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens which means classes can be passed into functions and also return them from functions
// 3. Classes are executed in strict mode

// const account = {
//   owner: 'Miriam',
//   movements: [300, 100, 430, 600],

//   get latest() {
//     return this.movements.slice(-1);
//   },

//   set latest(movement) {
//     this.movements.push(movement);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.birthYear = 2002;
// steven.name = "Steven";
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sara = Object.create(PersonProto);
// sara.init("SARA", 1978);
// sara.calcAge();
// console.log(sara);

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return `The current speed in ${this.speed} mi/h is ${this.speed / 1.6} km/h`;
//   }

//   set speedUS(speed) {
//     this.speed *= 1.6;
//   }
// };

// const ferrari = new CarCl('Ferrari', 300);
// console.log(ferrari.speedUS);
// ferrari.brake();
// ferrari.accelerate();

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();

// Inheritance Between Classes: Constructor Functions

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2038 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // Instance properties
//   Person.call(this, firstName, birthYear, course);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const miriam = new Student('Miriam', 1992, 'Computer Science');

// miriam.introduce();
// miriam.calcAge();

// console.log(miriam.__proto__);
// console.log(miriam.__proto__.__proto__);

// console.log(miriam instanceof Student);
// console.log(miriam instanceof Person);
// console.log(miriam instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

// Solution

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// Inheritance Between "Classes": Object.create

class StudentCl extends PersonCl {
  constructor(name, birthYear, course) {
    // Always needs to happen first
    super(name, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.name} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} Years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl("Martha", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
}

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// 1) Public field
// 2) Private field
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields (instances)
  locale = navigator.locale;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.#pin = pin;
    this.currency = currency;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`)
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if(this.#approvedLoan(val)) {
    if(this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approvedLoan(val) {
    _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Miriam', 'EUR', 1111);

// This method of pushing into an array in a class is unreliable and could lead to bugs
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1400);
acc1._approveLoan(1400);
console.log(acc1.getMovements)

console.log(acc1);
// console.log(#pin);
console.log(acc1._approveLoan);
console.log(Account.helper);

// Chaining
acc1.deposit(300).deposit(500).withdrawal(25).requestLoan(30000).withdrawal(3000);
// console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);

Rivian.accelerate().accelerate().accelerate().brake().chargeBattery(70).accelerate();
console.log(Rivian.speedUS);