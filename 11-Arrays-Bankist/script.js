'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key} - ${value}`);
});

// Set
const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'Pound']);
console.log(currenciesSet);

// ForEach with maps and sets

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposit ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('THIS IS forEach method');

// movements.forEach(function(movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${movement}`);
//   }
// })
/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//SLICE: returns the copy of the array with the extracted part
// console.log(arr.slice(2)); // ['c', 'd', 'e', 'f']
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-1));
// console.log(arr.slice(-3, -1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(2, -3));
// to reproduce the shallow copy of an array
// console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e', 'f']

// SPLICE: changes the original array to the new array
/**
 * for splice the second parameter tells the number of elements to delete
 */
// console.log(arr.splice(2, 2));
// REVERSE
// const arr2 = [6, 5, 4, 3, 2, 1];
// console.log(arr2.reverse());

// // CONCAT
// const lettersAndNums = arr.concat(arr2);
// console.log(lettersAndNums);
// console.log(...arr, ...arr2);

// // JOIN
// console.log(lettersAndNums.join('-'));

// const arrs = [23, 34, 62];
// console.log(arrs[0]);
// console.log(arrs.at(0));

// getting the last array element
// console.log(arrs[arrs.length - 1]);
// console.log(arrs.slice(-1)[0]);
// console.log(arrs.at(-1));

// console.log('Miriam Chiketa'.at(-1));