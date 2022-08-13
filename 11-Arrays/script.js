'use strict';

// LECTURES
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

const account5 = {
  owner: 'Miriam Chiketa',
  movements: [340, -300, -20, 50, 90, -150, 790,],
  interestRate: 0.3,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key} - ${value}`);
// });

// Set
// const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'Pound']);
// console.log(currenciesSet);

// ForEach with maps and sets: this returns only the value from the map
// which stands for a throw away in JS, referenced to not having a value
// currenciesSet.forEach(function(value, key, map) {
//   console.log(`${key} - ${value}`);
// });

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

// SLICE: returns the copy of the array with the extracted part
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

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia, dogsKate) {
  // 1.
  // const dogNumber = dogsJulia.slice(); //shallow copy of Julia's array
  // dogNumber.splice(0, 1);
  // dogNumber.splice(-1, 1);
  // 2. an array with both Julia's (corrected) and Kate's data
  // const dogs = dogNumber.concat(dogsKate);
  
//   // 3.
//   dogs.forEach(function(dog, i, arr) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log("\n------A DIFFERENT DATASETS-------\n");
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Data Transformations with map, filter and reduce
// map creates a brand new array from the original array and way more efficient than forEach method

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const movs of movements) movementsUSDfor.push(movs * eurToUsd);
// console.log(movementsUSDfor);

// const movedDescp = movements.map((mov, i) =>  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movedDescp);

// const createUsername = function (name) {
//   const username = name.toLowerCase().split(' ').map(user => user[0]).join('');
//   return username;
// };

// console.log(createUsername('Steven Thomas Williams'));

// filter use to filter for element in the original array for certain conditions

// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);
// reduce method used to bundle or add array element into a single value

// Coding Challenge #1.10 - Withdrawal
// const amtWithrawal = movements.filter(function(mov) {
//   return mov < 0;
// });

// console.log(movements);
// console.log(amtWithrawal);

// The reduce method

// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

// console.log(balance);

// Maximum Value
// const maximum = movements.reduce((acc, curr) => {
//   if (acc > curr) return acc;
//   else return curr;
// }, movements[0]);

// console.log(maximum);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

///////////////////////////////////////
// const calcAverageHumanAge = function(ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adultDog = humanAge.filter((dog) => dog >= 18);
  // console.log(adultDog, humanAge);

  // const average = adultDog.reduce ((acc, dog) => acc + dog, 0) / adultDog.length;

  // const avgHumanAgeOfDog =  adultDog.reduce((
  //   acc, age, i, arr) => acc + age / arr.length, 0
  // );
//   return average;
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const result = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const result2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(result, result2);

///////////////////////////////////////
// The Magic of Chaining Methods
/*
const eurToUsd = 1.1;
console.log(movements);
// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

///////////////////////////////////////

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
// const calcAverageHumanAge = ages => ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce ((acc, age, i, arr) => acc + age / arr.length, 0);

// const result = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const result2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(result, result2);

// find method: returns the first element in the array that returns true, find returns the element itself and not an array but filter returns a new array.

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// find a prime number in an array
// const primeNumber = function(ele, i, arr) {
//   let start = 2;
//   while(start <= Math.sqrt(ele)) {
//     if (ele % start++ < 1) {
//       return false;
//     }
//   }
//   return ele > 1;
// }

// console.log([4, 6, 8, 12].find(primeNumber)); // undefined, not found
// console.log([4, 5, 8, 12].find(primeNumber));

// some and every
// console.log(movements);
// EQUALITY
// console.log(movements.includes(-130));
// SOME: CONDITION
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// EVERY: eturns true if all the element i the array satisfies the conditions as true
// console.log(movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// flat and flatMap()
// const arr =  [[1, 2, 3], [4, 5, 6], 8, 9];
// console.log(arr.flat());

// const arrDeep = [[[1, 2, 3]], 4,[5, 6], [7,[8, 9]]];
// console.log(arrDeep.flat(2));

// const arrDeep2 = accounts.flatMap(acct => acct.movements).reduce((accu, currt) => accu + currt, 0);
// console.log(arrDeep2);

// Sorting Arrays

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// console.log(movements);
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);
// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// movements.sort((a, b) => b - a);
// console.log(movements);

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// Emprty arrays + fill method
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);
// arr.fill(23, 2, 6);
// console.log(arr);
// Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// Array Methods Practice

// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((accu, curr) => accu + curr, 0);
// console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000);
console.log(numDeposits1000);

const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((accu, curr) => (curr >= 1000 ? ++accu : accu), 0);
console.log(numDeposits);  

// 3.
const {deposit, withdrawal} = accounts
  .flatMap(acc => acc.movements)
  .reduce((accu, curr) => {
    // curr > 0 ? (accu.deposit += curr) : (accu.withdrawal += curr);
    accu[curr > 0 ? 'deposit' : 'withdrawal'] += curr;
    return accu;
  }, {deposit: 0, withdrawal: 0});
  console.log(deposit, withdrawal);

// const convertTitleCase = function(title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exceptions = ['and', 'a', 'but', 'an', 'the', 'with', 'in', 'on', 'or', 'is'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word))).join(' ');

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('the title of the book is live free'));
// console.log(convertTitleCase('this is a LONG title but not so long'));
// console.log(convertTitleCase('and name is another EXAMple to TItlE'));

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarasDog = dogs.find(sara => sara.owners.includes('Sarah'));
console.log(sarasDog);
const eating = sarasDog.curFood > sarasDog.recFood ? 'The dog eats too much' : 'The dog eats too little';
console.log(eating);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch} dogs eat too much`);

// 4.
const ownersEatTooLittle = dogs
  .filter(dog => dog.recFood > dog.curFood)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooLittle.join(', ')} dogs eat too little`);

// 5.
const dogEatsExact = dogs.some(dog => dog.curFood === dog.recFood);
console.log(dogEatsExact);

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const okayAmount = dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10;
console.log(dogs.some(okayAmount));
// 7.
console.log(dogs.filter(okayAmount));
// 8.
const sortedArr = dogs.slice().sort((a, b) => a.curFood - b.curFood);
console.log(sortedArr)