'use strict';

/*
/////////////////////////////////////////////////
// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
///////////////////////////////////////////////////////////
*/

// const flight = 'LHS34';
// const miriam = {
//     name: 'Miriam Chiketa',
//     passport: 234560987,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 3567890567;
//     passenger.name = 'Ms. ' + passenger.name;

//     if (passenger.passport === 234560987) {
//         console.log('checked in');
//     } else {
//         console.log('Wrong passport');
//     }
// };

// checkIn(flight, miriam);
// console.log(flight);
// console.log(miriam);

// Higher Order Functions(HOF)

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// the HOF concept
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// function returns function
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeter = greet('Hello! ');
// greeter('Miriam');
// greeter('Chiketa');

// Functions Assigned to Variables
// let addition = (num) => {
//   return num + 10;
// };

// let firstFunc = addition(20);
// console.log(firstFunc);
// newFunc is assigned the value of plusFive
// let newFunc = addition;

// Since newFunc has a function value, it can be invoked.
// let secondFunc = newFunc(5);
// console.log(secondFunc);

// Callback Functions
// a callback function is a function that is passed into another function as an argument.

// const isOdd = (odd) => {
//   return odd % 2 === 1;
// };

// let printOddNum = (oddFunc, num) => {
//   const oddNumRes = oddFunc(num);
//   console.log(`The number ${num} is an Odd Number: ${oddNumRes}`);
// };

// Pass in isEven as the callback function
// const result = printOddNum(isOdd, 5);

// console.log(result);

// Higher-Order Functions
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    // console.log(
    //   `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    // );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Miriam Chiketa');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);
book.call(swiss, ...flightData);
///////////////////////////////////////

// Bind
// bind does not immediately call the function instead it returns a new function where the this keyword is bind
// const bookEW = book.bind(eurowings);
// const bookLN = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Miriam Chiketa');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Maureen Ajagba');

// with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes)
// };
// console.log(lufthansa)

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTaxRate = function(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.13);
// console.log(addVAT2(300));

// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer(answers) {
//     const answer = Number (
//       prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
//     );
//     console.log(answer);

//     // register answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if(type === 'array'){
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// poll.registerNewAnswer();

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer(poll));

// poll.displayResults.call({ answers: [3, 4, 5] }, 'string');
// poll.displayResults.call({ answers: [1, 2, 7, 9, 4, 5] }, 'string');
// poll.displayResults.call({ answers: [3, 4, 5, 1, 2, 7] });

// immediately invoked function Expression(IIFE)
// const runOnce = function () {
//   console.log('This runs once');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
//   const runMe = 5;
// })();

// console.log(this.runMe); cannot access variable in IIFE

// CLOSURE:
// scope chain: order in which functions are written in the code
// call stack: order in which functions were called
// closure can also have priority over the scope chain
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function() {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// }

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// Example 2:
// const boardPassengers = function (n, wait) {
//   const groups = n / 3;

//   setTimeout(function () {
//     console.log(`we are boarding all ${n} passengers`);
//     console.log(`They are a set of 3 groups, each with ${groups} passengers`);
//   }, 2000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const groups = 900;
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();