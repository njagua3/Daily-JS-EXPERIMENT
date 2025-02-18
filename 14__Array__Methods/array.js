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
*/