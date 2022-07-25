// data structures, modern operators and strings
"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//   console.log(flights);
// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(pasta1, pasta2, pasta3) {
    return pasta1, pasta2, pasta3;
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    return mainIngredient, otherIngredients;
  },
};

const properties = Object.keys(openingHours);
// console.log(properties);

let openingTime = `We are opened for ${properties.length} business days: `;
// console.log(openingTime);

for (const day of properties) {
  openingTime += `${day}, `
}
// console.log(openingTime);

// Property VALUES
// console.log(Object.values(openingHours));

// Entries => Entire object presented as an array
const entry = Object.entries(openingHours);

// loop through the entry to get the Key, Value of the object
for (const [day, {open, close}] of entry) {
  // console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// OPTIONAL CHAINING ?. with NULLISH COALESCING
// on loop
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`${day} ${open}`);
// }
// // on methods
// console.log(restaurant.order?.(0,0) ?? 'Method does not exist');
// // on arrays
// const users = [{name: 'Miriam', email: 'gem@mail.com'}];
// console.log(users[1]?.email ?? 'name not in array');

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C ... ${i + 1} days ...`
//   };
//   console.log('...', str);
// };

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// printForecast(data1);
// printForecast(data2);

// const hours = restaurant.categories;
// console.log(hours);

// const [starter, mainCourse] = restaurant.order(0, 0);
// console.log(starter, mainCourse);

// const nested = ['John', '21AD', 'Nigeria', [24, 'blue'], []];

// const arr = nested.pop();

// // array Destructuring
// const [p, , , [j, k]] = nested;
// console.log(p, j, k);

// console.log(arr, nested.push('dog'), nested);

// working with objects in JavaScript

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// working with array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const copyArray = [...restaurant.mainMenu];

// const joinTwoArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(joinTwoArrays);

// iterables are string, array but not object
// const str = 'Miriam';

// const breakStr = [...str];

// console.log(`${breakStr} chiketa`);

// const ingredients = [
//   prompt("Let's list out pasta: pasta1"),
//   prompt("pasta2"),
//   prompt("pasta3"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Object
// const newRestaurant = {foundedIn: 1934, ...restaurant, founder: "Guiseppe"};
// console.log(newRestaurant);

// const copyRestaurant = {...restaurant};
// copyRestaurant.name = "Miriam Chiketa";
// console.log(restaurant.name);
// console.log(copyRestaurant.name);

// REST PATTERN AND PARAMETER => it does the exact opposite of the spread operator
/* spread operator is used to unpack an array, aber rest pattern is used to pack an array */

// For Array

// SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, ,risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// OBJECT for REST
// const {fri, ...weekdays} = restaurant.openingHours;
// console.log(fri);
// console.log(weekdays);

// Using Rest Parameter in functions
// const add = function(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) sum += nums[i];
//     // add the current num to the current sum value
//     console.log(sum);
// }

// add(3, 4);
// add(2, 4, 7, 6);
// add(5, 9, 1, 2, 7, 3, 8);

// const x =  [20, 21, 22];
// add(...x + 1);

// SHORT CIRCUITING && ||

// const arr = [2, 4, 5] + 1;
// console.log(arr);

// function foo(a) {
//   let b = a;
//   console.log(a + b);
// }
// foo(2);

// the doSomethingElse and a function is hidden in doSomething keeping it private only to the function it is declared in
// function doSomething(b) {
//   function doSomethingElse(b) {
//     return b - 3;
//   }

//   var a;

//   a = b * doSomethingElse(b * 6);
//   return a;
// }

// console.log(doSomething(2));
// console.log(doSomethingElse(5));

// setTimeout( function foo() {
//   console.log("taking a second");
// }, 1000);

// var func = 3;

// (function bar() {
//   var i = 4;
//   console.log(i);
// })();

// console.log(func);

// var a = 2;
// (function IIFE(global){
// var a = 3;
// console.log( a ); // 3
// console.log(global.a);
// })(window);
// console.log( a ); // 2

// Problem
// let b = 2;
// (function IIFE( global ){
// var a = 3;
// console.log( a ); // 3
// console.log( global.b ); // 2 i am getting undefined why
// })( global );
// console.log( b ); // 2

// BLOCK SCOPING
// var foo = true;

// if(foo) {
//   var b = foo * 3;
//   console.log(b);
// }

// CLOSURE
/* Definition: Closure is when a function can remember and access its lexical scope
even when it’s invoked outside its lexical scope.*/
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a); // 2
//   }
//   bar(baz); //call-site for bar
// }
// function bar(fn) {
//   fn(); // look ma, I saw closure!
// }
// foo();

// var fn;
// function foo() {
//   var a = 2;
//   let b = 4;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz; // assign baz to global variable
//   bar(b);
// }

// function bar(b) {
//   b += 5;
//   fn(); // look ma, I saw closure!
//   console.log(b);
// };

// foo(); //call-stack point for foo
// bar(2); // 2

// function wait(message) {
//   setTimeout(function timer() {
//     console.log(message);
//   }, 1000);
// }

// wait("Hello Viewer, Please wait")

// for(let i = 0, i < 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     let j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// SOLUTION 2: the j is declared a global variable and the i is a window variable or property
// for (var i = 1; i <= 5; i++) {
//   (function (j) {
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }

// MODULE : revealing module
// function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];
//   function doSomething() {
//     console.log(something);
//   }
//   function doAnother() {
//     console.log(another.join(" ! "));
//   }
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother,
//   };
// }
// var foo = CoolModule();
// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// var MyModules = (function Manager() {
//   var modules = {};
//   function define(name, deps, impl) {
//     for (var i = 0; i < deps.length; i++) {
//       deps[i] = modules[deps[i]];
//     }
//     modules[name] = impl.apply(impl, deps);
//   }
//   function get(name) {
//     return modules[name];
//   }
//   return {
//     define: define,
//     get: get,
//   };
// })();

// let MyModules = (function Manager() {
//   var modules = {};
//   function define(name, deps, impl) {
//     for (var i = 0; i < deps.length; i++) {
//       deps[i] = modules[deps[i]];
//     }
//     // the key
//     modules[name] = impl.apply(impl, deps);
//   }
//   function get(name) {
//     return modules[name];
//   }
//   return {
//     define: define,
//     get: get,
//   };
// })();

// MyModules.define("bar", [], function () {
//   function hello(who) {
//     return "Let me introduce: " + who;
//   }
//   return {
//     hello: hello,
//   };
// });

// MyModules.define("foo", ["bar"], function (bar) {
//   var hungry = "hippo";
  
//   function awesome() {
//     console.log(bar.hello(hungry).toUpperCase());
//   }
//   return {
//     awesome: awesome,
//   };
// });

// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");
// console.log(bar.hello("hippo")); // Let me introduce: hippo
// foo.awesome(); // LET ME INTRODUCE: HIPPO

// SHORT CIRCUITING

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

// OR aasignment
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 16;

// AND assignment
// rest1.numGuests &&= 10;
// rest2.numGuests &&= 5;
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// nullish assignment operator
// rest1.numGuests ??= 12;
// rest2.numGuests ??= 21;

// console.log(rest1);
// console.log(rest2);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1 create player arrays for each team
// const [players1, players2] = game.players;
// console.log(players1.length, players2);

// 2 For team1
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// console.log(`for team1: ${game.team1} the goalkeeper is ${gk}, the rest are field players.`);

// 3 show all players
// const [...allPlayers] = game.players;
// console.log(allPlayers);

// 4 add players to team1
// const [players1Final] = game.players;
// console.log(players1Final.push('Thiago','Coutinho','Perisic'));

// const players1Final = [...players1, 'Thiago','Coutinho','Perisic']
// console.log(players1Final);

// 5 create variables for each odd

// const {odds: {team1, x:draw, team2},} = game;
// console.log(team1, draw, team2);

// 6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`A total of ${players.length} players scored ${game.score} goals`);
// }
// printGoals(...game.scored);

// 7 print winner
// const {odds: {team1: winner},} = game;
// console.log(`The winner is the team with the lowest odd ${winner}`);

// THIS tutorial
// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   var greeting = `Hello, I'm ${identify.call(this)}`;
//   console.log(greeting);
// }

// var me = {
//   name: "Miriam",
// };

// var you = {
//   name: "A New Reader",
// };

// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);

// console.log(question.get('question'));

// // convert object to map
// console.log(Object.entries(openingHours));
// const openHour = new Map(Object.entries(openingHours));

// console.log(openHour);

// const answer = Number(prompt('Your answer'));

// console.log(question.get(question.get('correct') === answer));

// let num1 = 4;
// let num2 = 7;
// let num3 = 5;
// let num4 = 9;

// const A = num1 + num2;
// const B = num3 * num4;
// const C = B / A;
// console.log(A, B, C);

// const X = 32;

// if (X === 9) console.log(true);
// else console.log(false);

// const Y = 'Green';
// if (Y === 'Blue') {
//   console.log("Blue detected");
// } else if(Y === 'Green') {
//   console.log("Green detected");
// } else {
//   console.log("No green or blue detected");
// }

// Exercise 3 Level 2 Microverse
// const n = 61;

// if (n > 45){
//   if(n < 65) {
//     console.log('result', n);
//   }
//   console.log('result', n);
// }

// let arr = [1, 5, 34, 2, 7, 9, 0, 32, 2];

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] > 7) {
//     console.log(arr[i]);
//   }
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 4){
//     console.log(num[i]);
//   }
// }

// Exercise 1 Level 3 Microverse
// counting backwards
// for (let i = 102; i >= 27; i -= 3) {
//   console.log('result', i);
// }
// Exercise 2 Level 3 Microverse
// const arr = [];

// for (let nums = 3; nums <= 12; nums++) {
//   console.log(arr.push(nums));
//   // console.log(nums);
// }
// console.log(arr);

// const announcement = 'All passengers come to boarding door 23, Boarding door';

// console.log(announcement.replaceAll('door', 'gate'));

// let myName = 'miriam chinanu chiketa'.split(' ');

// const nameArr = [];

// for (const n of myName) {
//   nameArr.push(n[0].toUpperCase() + n.slice(1));
  
// }
// console.log(nameArr);

// Masking a credit card

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(23167890));
// console.log(maskCreditCard(4366770131674560));
// console.log(maskCreditCard('23167890345623098'));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   const textArea = document.getElementById('textarea').value;
//   const str = textArea.split('\n');
  
//   for(const [i, n] of str.entries()) {
//     const [x, y] = n.toLowerCase().trim().split('_');
//     console.log(x,y)
//     const output = `${x}${y.replace(y[0], y[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'✅ '.repeat(i + 1)}`);
//   }
// });

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, arrival] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? '🔴 ' : ''}${type.replaceAll("_", " ")} from ${getCode(from)} to ${getCode(to)} (${arrival.replace(":", "h")})`.padStart('36');
  console.log(output);
}
