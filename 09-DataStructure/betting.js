'use strict'

// Coding Challenge #2 ⚽ game

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  numOfGoal: [2, 1, 1],
};

// task 1:
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal scored by ${i + 1}: ${game.scored[i]}`);
// }

// solution 2:
// for (const [i, strikers] of game.scored.entries())
//   console.log(`Goal ${i + 1} ${strikers}`);

// task 2:
// get the values from the odds object
// const {team1, x, team2} = game.odds;
// const getOdds = Object.values(game.odds); //easier

// to calculate the average of odds
// let total = 0;
// for(const odd of getOdds) total += odd;
// total /= getOdds.length; //3.693333333334

// task 3:
// assigning key, value pair
// for(const [team, odd] of Object.entries(game.odds)) {
//   const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamName}: ${odd}`);
// }

// Bonus
// const playerGoals = {};

// const [x, num] = game.numOfGoal;

// game.scored.forEach((player, i) => {
//   playerGoals[player] = game.numOfGoal[i];
// })

// console.table(playerGoals);

// SET: is a collection of unique values w/c means SET can never have any duplicate and SETS are not meant to replace arrays

// const orderSet = new Set([
//   'pizza',
//   'pasta',
//   'macaroni',
//   'pasta',
//   'pizza'
// ]);

// orderSet.add('spaghetti');
// orderSet.has('pizza');
// orderSet.add(6);
// orderSet.has(6);
// console.log(orderSet.size);
// console.log(orderSet);

// for (const oder of orderSet) console.log(oder);

// convert SET => ARRAY
// const position = ['manager', 'tech team', 'sales', 'sales', 'finances'];
// const setToArray = [...new Set(position)];
// console.log(setToArray.size);

// const set1 = new Set();
// set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// set1.forEach((point) => {
//   if (point.x === 10) {
//     set1.delete(point);
//   }
// });
// console.log(set1);

// MAP: is a dataType use to map values to keys

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// task 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// task 2
// const unfair = gameEvents.delete(64);

// task 3
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened, on average, every ${(time / gameEvents.size).toFixed(0)} minutes`);

// task 4
// for (const [min, e] of gameEvents) {
//   const half = min <= 45 ? 'first' : 'second';
//   console.log(`${half} half => ${min}: ${e}`);
// }

// Working with strings PART 1:
const airline = 'TAP Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);

// console.log('B245'[0]);
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(4)));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
const mail = 'hello@miriam.io';
const email = '  Hello@Miriam.Io '

const changeMail = email.toLowerCase().trim();
console.log(mail, email, changeMail);


