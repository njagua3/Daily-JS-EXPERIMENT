/*
Filter Method - non destructive
            useful for retrieving data in a db and filtering data
            based on a certain condition.
            Eg filtering scores that are not atleast 20 or are 20+

Filter method iterates an array and performs a check on each item in
array inside a callback function.
- Callback function fires for each item in the array and perform some
kind of checks and if check passes it will be kept inside the filtered array

- Since its non destructive you need to store the new array inside a new
variable. The new variable will contain the filtered items

EXAMPLE
            */

const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
  //condition
  return score > 18;
});
console.log(filteredScores);

// Example 2
const users = [
  { name: "kevin", premium: true },
  { name: "john", premium: false },
  { name: "wick", premium: false },
  { name: "wangari", premium: true },
];

const filteredUsers = users.filter((user) => {
  //condition
  if (user.premium) {
    return user;
  }
});
console.log(filteredUsers);

//or
const premiumUsers = users.filter((user) => {
  return user.premium;
});
console.log(premiumUsers);

/*
Map Method - non destructive
            useful for creating new arrays
   it takes an array and maps it into a completely new array         
cycles through an array and creates a new array based on that array
   */

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
  return price / 2;
});
console.log(salePrices);

//Example 2
const products = [
  { name: "goldstar", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const newProductPrices = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(newProductPrices);

/* 
Reduce Method

It doesnt necessarily return a new array

Instead it can return any single value which could be an 
array or it could be a number or a string
the callback fn has 2 parameters; accumulator & current

we want to know how many numbers are over 50
*/

const score = [10, 20, 60, 40, 70, 90, 30];

const over50 = score.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);
console.log(over50);

// Example 2

const userScores = [
  { player: "mario", score: 20 },
  { player: "mamoush", score: 40 },
  { player: "mario", score: 30 },
  { player: "beyonce", score: 10 },
];

const marioTotal = userScores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(marioTotal);

/* 
Find Method - 
   returns the value of the 1st element inside an array that passes a certain
   test in a callback function. 
*/

const theScore = [10, 5, 0, 40, 30, 10, 90, 70];

const firstScore = theScore.find((score) => {
  if (score > 50) {
    return score;
    // or return score > 50
  }
});
console.log(firstScore);

/*
SORT METHOD - IN JS when we have an array of data we might want to sort
the data or rearrange it in a particular way
eg sort an array of names in alphabetical order or

sorting an array of objects depending on the value eg scores

- This method is destructive

STRINGS EXAMPLES
-Sort method aut sorts strings
*/

const names = ["Marvin", "Kevin", "Zahra", "Jane", "Punisher", "Zorro"];
names.sort();
names.reverse();
console.log(names);

/*
NUMBERS EXAMPLES
- Sort method sorts numbers
*/

const age = [20, 10, 2, 13, 56, 12, 76, 45];

// age.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(age);

//or
age.sort((a, b) => {
  return b - a;
});
age.reverse();
console.log(age);

// EXAMPLE 2
const players = [
  { player: "mario", score: 20 },
  { player: "mamoush", score: 40 },
  { player: "mario", score: 30 },
  { player: "beyonce", score: 10 },
  { player: "sasha", score: 70 },
];

// we want to sort the array above depending on the score

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});
console.log(players);

//or
players.sort((a, b) => {
  return b.score - a.score;
});
console.log(players);

/* CHAINING ARRAY METHODS */

const produce = [
  { name: "goldstar", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

//Filtered method - if price is over 20

const filteredProduce = produce.filter((produce) => {
  return produce.price > 20;
});

// Map method

const promos = filteredProduce.map((produce) => {
  return `the ${produce.name} is ${produce.price / 2} pounds`;
});

console.log(promos);

// OR Method Chaining

const promotions = produce
  .filter((produce) => produce.price > 20)
  .map((produce) => {
    return `the ${produce.name} is ${produce.price / 2} pounds`;
  });

console.log(promotions);
