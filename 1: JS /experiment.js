// STRINGS

// STRING CONCATENATION - JOINING 2 OR MORE STRINGS

let firstName = "Zahra",
  lastName = " Wangari",
  fullName = firstName + lastName;

console.log(fullName);

//GETTING CHARACTER

console.log(fullName[0]);

//STrING LENGTH - String property method
//gets length of string

console.log(fullName.length);

/* STRING METHODS/FUNCTION

Methods - a fn associated with a specific data type
methods are invoked using dot notation
METHODS CAN BE DEFINED IN AN OBJECT */

/*FUNCTIONS - A block of code that perform a specific fn
             - invoked directly 
*/
//.toUpperCase() - converts all characters to uppercase

console.log(fullName.toUpperCase());

//.toLowerCase() - converts all characters to lowercase

console.log(fullName.toLowerCase());

// MORE METHODS
// LETS CREATE A VARIABLE TO SHOWCASE THE METHODS

let myEmail = "kevinndiritu@gmail.com";

// SLICE METHOD
// slices a section from a string
//it takes in two argument; where to slice from and 2nd is where to slice to

let myResult = myEmail.slice(0, 5);
console.log(myResult);

// substring() method
// takes 2 arguments
// 1st is where to start from
// 2nd is selecting HOW MANY CHARACTERS YOU WANT

let result2 = myEmail.substring(0, 10);

console.log(result2);

// REPLACE() METHOD
// replaces a character/s in a string

let result3 = myEmail.replace("gmail", "hotmail");

console.log(result3);

/*NUMBERS */

const title = "Best read of 2019",
  author = "Zahra",
  likes = 30;

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes </span>
`;

console.log(html);

// let names = ["zahra", "kevin", "valentine"],
//   year = [2023, 1995, 1996];

// let results = names.concat(year);

// console.log(results);

// // FOR LOOP
// for (i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }

// console.log("loop finished");

// const studs = ["shaun", " mario", "luigi"];

// for (i = 0; i < studs.length; i++) {
//   console.log(studs[i]);
//   let html = `<div>${studs[i]}</div>`;
//   console.log(html);
// }

const names = ["shaun", " mario", "luigi"];
let i = 0;

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// //IF STATEMENTS
// const age = 24;

// if (age > 18) {
//   console.log("You are a senor");
// }
// const ninjas = ["shaun", "ryu", "chunli", "kevin"];

// if (ninjas.length > 3) {
//   console.log("That's a lot of ninjas");
// }

// const password = "p@sd1234";

// if (password.length >= 12 && password.includes("@")) {
//   console.log("The password is mighty strong");
// } else if (password.length >= 8 || password.includes("@")) {
//   console.log("The password is long enough");
// } else {
//   console.log("The password is not long enough");
// }

// //BREAK AND CONTINUE
// const scores = [50, 12, 24, 0, 39, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   console.log("Your score is:", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Congrats! you got the top score");
//     break;
//   }
// }

//SWITCH STATEMENTS
const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got a B");
    break;
  case "C":
    console.log("you got a C");
    break;
  case "D":
    console.log("you got a D");
    break;
  case "E":
    console.log("you got a E");
    break;
  default:
    console.log("not a valid grade");
}

//BLOCK SCOPE vs GLOBAL SCOPE

let age = 30;
let name = "zahra";

if (true) {
  let age = 29;
  let name = "Kevin";
  console.log("Inside block scope:", name, age);
}

console.log("Outside block scope:", age, name);

// FUNCTIONS
// function declaration
function greet() {
  console.log("Hello there!");
}
greet();
greet();

// function expression

// const speak = function () {
//   return "Good morning!";
// };
// console.log(speak());

// ARGUMENTS AND PARAMETERS
// const speak = function (name = "kev", time = "night") {
//   console.log(`Good ${time} ${name}`);
// };
// speak("Zahra", "morning");
// speak();

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(10);
// console.log(area);

// const calcVolume = function (area) {
//   return area * 4;
// };
// console.log(calcVolume(area));

// ARROW FUNCTIONS

// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(10);
// console.log(area);

// const greets = () => "hello world!",
//   results = greets();

// console.log(results);

// const bill = (products, tax) => {
//   let total = 0;
//   for (i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// const prayers = function (name, time) {
//   console.log(`Dear ${name},End of year prayers begin at ${time}`);
// };
// prayers("Kevin", "6 oclock");

// const students = ["Kevin", "Zahra", "Valentine", "Jane"];

// students.forEach(function (student) {
//   console.log(student);
// });
// //ARROW FUNCTION
// students.forEach((student) => {
//   console.log(`My name is ${student}`);
// });

//OPTION 2 OF WRITING CALLBACK FNS
//IF THE FUNCTION IS BIG

// let people = ["John", "James", "Bob", "Luka"];

// const logPerson = (person, index) => {
//   console.log(`${index} - Hi ${person}`);
// };

// people.forEach(logPerson);

//Callback functions in action
// I have added a ul in the body with a class named people

// const ul = document.querySelector(".people");

// const people = ["John", "James", "Bob", "Luka", "chunli"];
// let html = ``;
// people.forEach((person) => {
//   //create html template
//   html += `<li style="color: red">${person}</li>`;
// });
// console.log(html);
// ul.innerHTML = html;

// //OBJECT LITERAL NOTATION

// let user = {
//   name: "kevin",
//   age: 29,
//   email: "kevinndiritu@gmail.com",
//   location: "Nairobi",
//   blogs: ["Why mac & cheese rules", "10 things to mkae with marmite"],
//   login: function(){
//     console.log("user logged in")
//   }
// };
// console.log(user);

// // ACCESING PROPERTIES FROM OBJECT
// // WE USE DOT NOTATION
// console.log(user.name);
// // OVERWRITING/Update VALUES IN AN OBJECT
// user.age = 35;
// console.log(user.age);

// //ACCESSING AND UPDATING USING SQUARE BRACKET NOTATION
// console.log(user["name"]);
// console.log(user["email"]);

// //updating

// user["name"] = "Zahra";
// console.log(user["name"]);

// console.log(typeof user);

//ADDING METHODS

// let user = {
//   name: "kevin",
//   age: 29,
//   email: "kevinndiritu@gmail.com",
//   location: "Nairobi",
//   blogs: ["Why mac & cheese rules", "10 things to mkae with marmite"],
//   login: function () {
//     console.log("user logged in");
//   },
//   logout: function () {
//     console.log("user logged out");
//   },
//   logBlogs: function () {
//     console.log("This user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlogs();

//OR

let user = {
  name: "kevin",
  age: 29,
  email: "kevinndiritu@gmail.com",
  location: "Nairobi",
  blogs: ["Why mac & cheese rules", "10 things to mkae with marmite"],
  login() {
    console.log("user logged in");
  },
  logout() {
    console.log("user logged out");
  },
  logBlogs() {
    console.log("This user has written the following blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.login();
user.logout();
user.logBlogs();

//OBJECTS IN ARRAYS

let users = {
  name: "kevin",
  age: 29,
  email: "kevinndiritu@gmail.com",
  location: "Nairobi",
  blogs: [
    { title: "The hardy Boys", likes: 30 },
    { title: "The Nancy Drew", likes: 60 },
  ],
  login() {
    console.log("user logged in");
  },
  logout() {
    console.log("user logged out");
  },
  logBlogs() {
    console.log("This user has written the following blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

users.logBlogs();

//EXAMPLE 2

let users2 = {
  details: [
    {
      name: "kevin",
      age: 29,
      email: "kevinndiritu@gmail.com",
      location: "Nairobi",
    },
    { name: "Zahra", age: 30, email: "zahra@gmail.com", location: "Kisumu" },
    {
      name: "Valentine",
      age: 28,
      email: "valentine@gmail.com",
      location: "Mombasa",
    },
  ],
  getDetails() {
    console.log("User Details:");
    this.details.forEach((detail) => {
      console.log(detail.name, detail.age, detail.email, detail.location);
    });
  },
};

users2.getDetails();

// math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

//MATH METHODS

const area = 7.2;
console.log(Math.round(area));

console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//USE CASE FOR THE MATH OBJECT

//GENERATING  RANDOM NUMBERS

let random = Math.random();
console.log(random);

console.log(Math.round(random * 50));

//PRIMITIVE AND REFERENCE DATA TYPES
// PRIMITIVE TYPES - numbers,booleans,strings,null,undefined, symbols

//when you create eg a number and assign it to a variable
//the value is stored in sth called a STACK
//value stored in stack has a pointer - the variable name
//A stack is just a stack of diff values in memory & can be accesed quickly
// when you make a copy of a primitive data type
// the copy is stored also in the stack
// when you make a change to one value the other isnt changed

let num1 = 10;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 20;

console.log(num1);
console.log(num2);

// REFRENCE DATA TYPES

//All types of Objects

// STORED IN A HEAP WHICH HAS MORE SPACE BUT  ABIT SLOWER
// WHEN YOU MAKE A COPY OF EG AN ARRAY THERE ARE 2 POINTERS THAT POINT TO THE SAME VALUE
// A COPY EG AN ARRAY IS STORED ONCE IN MEMORY AND 2 POINTERS POINT TO THE SAME VALUE
//HENCE WHEN YOU UPDATE ONE OF THEM IT UPDATES BOTH

// STEP 1 - GRABBING ELEMENTS USING QUERY SELECTOR
const paragraph = document.querySelector(".error");

console.log(paragraph);

const div2 = document.querySelector("div.error");
console.log(div2);

const heading = document.querySelector("body > h1");

console.log(heading);

const para = document.querySelector("body > div:nth-child(3) > p:nth-child(2)");

console.log(para);

//GRABBING MULTIPLE ELEMENTS

// WEUSE QUERYSELECTORALL

const ps = document.querySelectorAll("p");
// console.log(ps, typeof ps);
// we get a NodeList which is an array like structure but has a lot of additional methods

console.log(ps[1]);
//JUST LIKE AN ARRAY WE CAN USE THE FOREACH METHOD AND LOOP THROUGH THE P'S NODELIST
ps.forEach((paragraph) => {
  console.log(paragraph);
});

// EXAMPLE 2

const errors = document.querySelectorAll(".error");

errors.forEach((error) => {
  console.log(error);
});

// STEP 2 - ADDING AND CHANGING PAGE CONTENT
//WE use the .innerText property to update

const my1stParagraph = document.querySelector("p");

my1stParagraph.innerText = "Hi Kevin,Welcome to your J.S lessons";

//CHANGING TEXTS OF SEVERAL ITEMS AT ONCE

const allParas = document.querySelectorAll("p");
allParas.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");

//console.log(content.innerHTML);

//Updating it
content.innerHTML += "<h2>THIS IS A H2</h2>";

//EXAMPLE WITH AN ARRAY OF NAMES FROM A DB

const myPeople = ["kevin", "jak", "zahra", "valentine"];

myPeople.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

// NB += IS FOR APPENDING
//     = IS FOR OVERWRITING THE CONTENT

//GETTING AND SETTING ATTRIBUTES

// WHAT ARE ATTRIBUTES?

// I have added an anchor element in the html file for practice

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

//setting attributes
// .setAttribute() = takes in 2 arguments
// 1st arg - which attr are you changing, 2nd argument - what are you changing it to

link.setAttribute("href", "https://kevin-nyingi-portfolio.netlify.app/");
link.innerText = "KEVIN NYINGI PORTFOLIO";

//EXAMPLE 2

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));

//ADDING  ATTRIBUTES

mssg.setAttribute("class", "success");
