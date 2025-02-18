/*
Filter Method - non destructive
            useful for retrieving data in a db
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

// const filteredUsers = users.filter((user) => {
//   //condition
//   if (user.premium) {
//     return user;
//   }
// });
// console.log(filteredUsers);

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

const newProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(newProducts);
