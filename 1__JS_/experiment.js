/* INTRODUCTION TO JAVASCRIPT*/

/* VARIABLES, CONSTANTS & COMMENTS*/

/* DATA TYPES AT A GLANCE*/

/* 
STRINGS - Anything element in single or double quoation marks eg numbers,letters

STRING CONCATENATION - JOINING 2 OR MORE STRINGS 
 
*/

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
METHODS CAN BE DEFINED IN AN OBJECT functions cannot*/

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

/*NUMBERS 
include whole numbers and decimals

WHAT CAN WE DO WITH NUMBERS

1: Math operations - +,-,*,/,**,% etc

        EXAMPLES
*/
let pi = 3.14,
  radius = 10;

let remainder = radius % 3; // % modulus (remainder of)
console.log(remainder);

let circleArea = pi * radius ** 2; // Formula for getting area of a circle

console.log(circleArea);

//Order of operation - B O D M A S

// Lets say you wanted to add 1 to the total number of eg likes

let totalLikes = 10;

// You could do it this way;

/* totalLikes = totalLikes + 1; 
But theres a shorter way of doing this
*/

totalLikes++;

//this also aplies to subtraction

console.log(totalLikes);

//What if we wanted to add eg 10

totalLikes += 10;

console.log(totalLikes);

/* The same applies to subtraction,multiplication etc
totalLikes *= 10
totalLikes -=30
totalLikes += 4
totalLikes /= 2 
*/

/*NaN - Not a number 
we get this value when we try to make a calculation that doesnt result in a number

             EXAMPLE
*/
console.log(5 / "karma");

/*CONCATENATION OF NUMBERS - Joining numbers and strings

This is the old way

example
*/
let herAge = 10,
  herResult = "This car is owned by a " + herAge + " year old girl";

console.log(herResult);

/*TEMPLATE STRINGS || TEMPLATE LITERALS
  
  - Allows us to inject variables without needing to use the + sign
  - We use backticks instead of quoatation marks
  - We use ${variable} inside the backticks to insert the value of the variable
  
           EXAMPLE
  */

const title = "Best read of 2019",
  author = "Zahra",
  likes = 30;

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

/* 
           TEMPLATE STRINGS USE CASE
- Creating HTML TEMPLATES

   EXAMPLE
 */
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes </span>
`;

console.log(html);

// WE will later learn how to output a template to the browser(Covered in the DOM SECTION)

/* ARRAYS []
          
- They fall under object data type     

- we can store various data types and they can even be mixec(like races) but its not recommended

- We use arrays to store a collection of things eg number,strings etc

- Getting position in an array - we use [] notation

example

let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // gets 1st element in array

- Overriding value of an element in an array

numbers[0] = 28;
*/

//       ARRRAY PROPERTIES & METHODS

let ninjas = ["zahra", "kevin", "valentine"],
  year = [2023, 1995, 1996];
// array length - gets total elements in an array

console.log(ninjas.length); // 3

// CONCAT METHOD - Joins 2 arrays together to be 1

let results = ninjas.concat(year);

console.log(results);

let result5 = ninjas.concat(["Sarah", "kasongo", "murima"]);
console.log(result5);

// JOIN METHOD - joins elements with the specified symbol

let jointResult = ninjas.join(",");

console.log(jointResult);

// INDEXOF - gets index of an element in an array

let index = ninjas.indexOf("kevin");
console.log(index);

// PUSH METHOD (destructive method)
//  - pushes a new element into the array
//   - Returns new length of the array
//  - Alters the original values of an array

let newArrayLength = ninjas.push("sweeney");
console.log(newArrayLength);
console.log(ninjas);
console.log(typeof ninjas);

// POP METHOD (destructive method)
//  - removes last value in array
// - returns the the value it popped

let popMethod = ninjas.pop();
console.log(popMethod);

/* Null & Undefined 
 Null - intentionally assigning a variable with a value of null
 eg let age = null
 - use case = when we want to clear field in a form

 Undefined - creating a variable without assigning a value
 eg let year;

*/

/*          BOOLEANS 
   - Represent 2 special values in JS ; true & false
   - They are never in strings
- we use them to evaluate conditions & also check whether certain things are true or false

          Examples

methods can return booleans
          */
let herEmail = "zahrawangari45@gmail.com";

let confirmation = herEmail.includes("@"); //returns either true or false

console.log(confirmation);

//       Example 2

let family = ["zahra", "jane", "kevin"];
let check = family.includes("jane");
console.log(check);

/* COMPARISON OPERATORS 
For comparing 2 things
 
Example
*/
let hisAge = 29;
console.log(hisAge == 24);
console.log(hisAge == 29);
console.log(hisAge != 24);
console.log(hisAge > 24);
console.log(hisAge >= 24);
console.log(hisAge <= 24);

/* FOR STRINGS

-Lower case letters are greater than any Uppercase letters
-also the starting letter of a strings determines if its greather than the other
- later letters in alphabet are greater than earlier letters
 
example

*/
let nickname = "John";
console.log(nickname > "Chloe");
console.log(nickname < "john");

/*LOOSE(==) VS STRICT(===) COMPARISON OPERATORS

loose - different types can still be equal
let age = 25;

// loose comparison
console.log(age == 25);
console.log(age == '25');  
both return true

ALWAYS USE STRICT EQUALITY OPERATORS
console.log(age === 25); true
console.log(age === '25'); false - a number can't be equal to a string
console.log(age !== 22); true
*/

/*  TYPE CONVERSION

CONVERTING STRINGED NUMBERS TO NUMBERS

- Turning one data type into another
- lets say we wanted to add a score to a number stored as a string

*/
let score = "100";
console.log(score + 1); // we get a concatenation value of 1001
// HOW TO BYPASS THIS AND CONVERT SCORE TO NUMBER

score = Number(score); // turns string to number
console.log(score + 1);
console.log(typeof score); //what data type is stored in the variable

/* BOOLEAN CONVERSION

-Positive & negative numbers are considered truthy values

- Zero & Empty strings are falsey values

- Strings of any lenth are truthy values
*/
let totals = Boolean(200);
console.log(totals);

let empty = Boolean("");
let string = Boolean("kevinndiritu@gmail.com");
let zero = Boolean(0);
console.log(zero, empty, string);

/* CONTROL FLOW 
 
As we write more complex code we need to somehow control the flow
ie decide what we want to do next or execute a piece of code over
& over. For example we have an array of data that we want to cycle 
through/Loop through and perform some code inside the elements

For this we use a LOOP. A Loop is a type of control flowing in JS

We also use Conditional Statements

Loops & Conditional Statements are called control flows because we use
them to control the flow of our code 
                    
              Types of Loops
   
  Rememeber the job of a loop is to loop through a portion of code
  over & over again  
  
  All loops do the same thing. I prefer using a for loop
*/

/*FOR LOOP 

            How to create a for loop 

for (i = 0; i < 5; i++) {
  console.log("in loop:", i);
}

console.log("loop finished");

let i = 0 - This is the initialization variable.
           - Acts like a counter and keeps track of how many times
           we cycle through the loop

i < 5 - Condition statement = evaluates to either true or false
       - if its true code is executed

i++ = Final expression - executes everytime at the end of code block
The use of a final expression is to change the value of a initialization variable

NB: A lot of the times we wont know how many times we want to loop
through something
- Typically what we do is loop through data of some kind

            Example:
*/
const studs = ["shaun", "mario", "luigi"];

for (let i = 0; i < studs.length; i++) {
  console.log("student", studs[i]);
}

/*NB - When using the .length method since we do not know number of elements
in an array when we return jus eg i we get the length of array

If we want to output the items in array we have to do this - studs[i]

What if instead of just logging the names we wanted to create a HTML Template
so that we can output it to the console.

        lets use the same array above 
*/
for (let i = 0; i < studs.length; i++) {
  let html = `<div>${studs[i]}</div>`;
  console.log(html);
}

/* 
Declaring i with let inside each for loop ensures that each loop works independently without conflicts.
In short since i have 2 for loops I must use let or const keyword to initialize block scope
If i do not, that is the same as trying to redeclare the variable i 

CYCLING THROUGH DATA/ LOOPING THROUGH/ ITERATING THROUGH DATA
These terminologies mean the same thing
Each iteration is one cycle

/*WHILE LOOP

A while loop is a type of control flowing in JS

It only has the conditional statement in parenthesis

Initialization variable must be declared before the loop begins

Final expression must be in code to avoid an infinite loop.
The use of a final expression is to change the value of a initialization variable
Put it at the end of the code block
*/
const names = ["shaun", " mario", "luigi", "Zahra"];
let i = 0;

while (i < names.length) {
  console.log("My name is,", names[i]);
  i++;
}

/* IF STATEMENTS / CONDITIONAL STATEMENTS

- Called if statements coz if a certain condition is true we do sth
-

   EXAMPLE 1
*/
const theAge = 24;

if (theAge > 18) {
  console.log("You are a senor");
}

/* EXAMPLE 2*/

const ninjars = ["shaun", "ryu", "chunli", "kevin"];

if (ninjars.length > 3) {
  console.log("That's a lot of ninjas");
}
/* EXAMPLE 3*/
let herPassword = "Njagua323565!";

if (herPassword.length > 7) {
  console.log("The password is strong");
}

/* ELSE STATEMENTS

It would be good to run a different code block if first condition is false
This helps to offer feedback to a user
To do that we use an else statement */

if (herPassword.length > 7) {
  console.log("The password is strong");
} else {
  console.log("the password is not long enough");
}

/*EXAMPLE 4

Use case for an if, else if statement
example - checking strength of a password

Checking Multiple Conditions using the else if, else statement &

   LOGICAL OPERATORS

We can check multiple conditions at once using logical operators

The 2 main types are; OR operator(||) and AND operator(&&)

If you use && Both conditions have to be true for code block to run

If you use || operator one condition has to be true for code to run

*/

let password = "p@sd1234";

if (password.length >= 12 && password.includes("@")) {
  console.log("The password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("The password is strong enough");
} else {
  console.log("The password is not strong enough");
}

/* The above conditions are read this way:
if password.length is >= 12 and the password includes @ sign run the code block
if its not true; then we check the else if condition
if its also not true; the else statement will run
1 of the 3 must always be true.
Only one will run no matter how many statements we have


LOGICAL NOT(!) OPERATOR

The NOT operator inverts the value of a boolean expression
sometimes we want to execute a code block if the condition is false

Example:
Lets say we have a user defined

let isLoggedIn = true;

When we place an exclamation mark infront of a boolean, the ! reverses the boolean
If we place it infront of a true value it evaluates to false
If we put it infront of a false value it evaluates to true  */
let isLoggedIn = false;

if (!isLoggedIn) {
  // we just switch value of isLoggedIn TO TRUE inside these brackets
  console.log("You must be logged in");
}

/*
JAVASCRIPT KEYWORDS

BREAK AND CONTINUE */

const scores = [50, 12, 24, 0, 39, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  //Let's say when we get to a score of 100 which is the max score
  // we want to stop the loop/break out and print a message to the console
  // and break out of the loop.

  if (scores[i] === 0) {
    console.log("Game Over, Try Again");
    continue;
  }
  console.log("Your score is:", scores[i]);

  if (scores[i] === 100) {
    console.log("Congrats! you got the top score");
    break;
  }

  // Continue statement
  // If we want to skip the current iteration and move to the next one
  // we can use the continue statement
}

/*SWITCH STATEMENTS - A better solution to if, else if statement 

Useful when we are checking multiple values of a single variable
Example we have a variable called grade

Switch statement is better and more readable than multiple if else if statements

Our grades variable can have different values eg A,B,C,D OR E

We want to check the different cases it could be

We do that by use the: 

case Keyword

break keyword - helps to breakout of switch statement 

default keyword - it is used when none of the case statements match

switch = variable name
case = different values a variable could be
*/
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

// NB: Switch statements use strict equality to check(50 is not equal to '50')
//strict equality takes into consideration the typeof and the actual value

/*BLOCK SCOPE vs GLOBAL SCOPE

scope means area in which a variable value is relevant

global scope - variable that can be accesed anywhere in the file if needed

NB: You cannot redeclare/redefine a variable again in global scope
BUT you can redeclare a global scope variable in block scope

local/block scope - variable that can be accesed only in the block where it is defined
*/
let age = 1.5;
let _name = "zahra";

if (true) {
  let age = 29;
  let _name = "Kevin";
  console.log("Inside block scope:", _name, age);
}

console.log("Outside block scope:", age, _name);

/*         FUNCTIONS
        
functions allow us to define a code block we can call and execute whenever
Think of a fn as a box with some code inside it that does a sth particular

This is how we call a function - function scores will be called this way
scores()

we can call a function as many times as we want

 Functions help us to write bits of code which are reusable       
        
 DIFFERENT WAYS OF CREATING A FUNCTION

 A: Function Declaration

 keyword is function & then give the fn a name same way we do with variables

 */
function greet() {
  return "Hello there!";
}
console.log(greet()); // Calling/Invoking a Function
greet(); // we must call a function

/* Function Expression

This is creating a function by storing it in a variable
This time the function has no name since now name is the variable name

NB: Anytime you create a variable and set it equal to sth eg a function , string
number etc that is known as an EXPRESSION
At the end of an expression we usually put a semi colon 



*/
const speaks = function () {
  return "Good morning!";
};
console.log(speaks());

/* HOISTING IN JAVASCRIPT
This is calling/invoking a function before the function

This works with function declaration

BUT not with Function expressions

WHEN DECLARING FUNCTION I 99% PREFER MOST OF THE TIMESTO USE FN EXPRESSIONS


ARGUMENTS AND PARAMETERS

parameters passed with values as shown below are default values
for just incase you forget to pass an argument to a fn while calling it

Parameters have local scope and are only accesible within the function

The order of arguments passed to a fn must match order of parameters
*/
const speak = function (name = "kev", time = "night") {
  return `Good ${time} ${name}`;
};
console.log(speak("Zahra", "morning"));
console.log(speak()); //default values are used

/* Returning Values
When a function returns a value what we need to do is store the 
value in a variable so that we can use it later

This provides global scope and now we can use the return value anywhere

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2; // local scope
  return area;
};
const area = calcArea(10); // global scope. we are storing the return value here
console.log(area);

We are simply;
calling a function 
it returns the area

CODE CLEAN UP
No need of local variable return the area
store area in a global variable - can be accesed anytime

*/
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const theArea = calcArea(10);
console.log(theArea);

const calcVolume = function (theArea) {
  return theArea * 4;
};
console.log(calcVolume(theArea));

/* ARROW FUNCTIONS 
Modern Way of writing functions
I'll use the functions above but i will switch the names a bit

We do not ue the function keyword

It is a shorter way to create a regular function

const area = (parameters) => {code block};

If we have a single return line we can take away the return keyword
& remove the curly braces as shown below

NB: THERE ARE TIMES THE ARROW FUNCTION CANNOT BE USED(EG FOREACH METHOD)

*/

const calcAreas = (radius) => 3.14 * radius ** 2;

const areas = calcAreas(10);
console.log(areas);

/* PRACTICE ARROW FUNCTIONS*/

const greetV = () => "hello ms. valentine";
const greetResults = greetV();
console.log(greetResults);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
totalTax = bill([10, 15, 30], 0.2);
console.log(totalTax);

/* FUNCTIONS vs METHODS

Both functions and methods are used to perform a specific task

A FUNCTION IS A BLOCK OF CODE THAT CAN BE INVOKED
Functions are invoked directly
Functions are used when we want to reuse the code
Functions are defined on their own while
Methods are defined in an object or data type

const name = () => "Hi Kevin"; // fn defined on its own
let result = name(); 

A METHOD IS STILL A FUNCTION
Methods - Functions used in a specific data type EG STRING,OBJECT ETC
invoked using dot notation(.length(), .toUpperCase(), .includes())
Methods can be defined inside an object, regular fns cannot

let name = "kevin";
name.toUpperCase(); //METHOD INVOKED & method defined on a string

The difference between methods and functions is how they are INVOKED

*/
/* Foreach Method & Callbacks

Callbacks - This is when we pass a function as an argument
           - The passed function is called a callback function

Using a method in combo with a function

FOREACH METHOD - It is a method that iterates over an array
     - It is abit like a loop but it is more elegant
     - The method expects a callback function as an argument
NB: A callback fn can take a 2nd parameter for the index
     */
let myPeeps = ["Zahra", "Valentine", "Jane", "Makena", "John"];

myPeeps.forEach((person, index) => {
  console.log(`${index} - My name is ${person}`);
});

/* OPTION 2 OF WRITING CALLBACK FNS
           
          IF THE FUNCTION IS BIG */

let men = ["John", "James", "Bob", "Luka"];

const logPerson = (person, index) => {
  console.log(`${index} - Hi ${person}`);
};

men.forEach(logPerson);

/* Callback functions in action

Adding an array of names into a html template
& outputing it on the browser

I have added a ul in the body with a class named people 

You have to create an empty variable outside of the callback fn
for storage purpose
It can be accessed by the callback fn since it's a global variable


*/

const ul = document.querySelector(".people");

const people = ["John", "James", "Bob", "Luka", "chunli"];
let myHtml = ``;
people.forEach((person) => {
  //create html template
  myHtml += `<li style="color: red">${person}</li>`;
  // the += is for adding each iteration to the empty variable
});
console.log(myHtml);
ul.innerHTML = myHtml;

// EXAMPLE 2
const divInHtml = document.querySelector(".content");
const pips = ["mario", "kevin", "luigi", "zahra", "jane"];
let myPeoples = "";
pips.forEach((person) => {
  return (myPeoples += `<li style="color:blue">My name is: ${person}</li>`);
});

divInHtml.innerHTML += myPeoples;
console.log(myPeoples);

/* 
OBJECTS AT A GLANCE

The best way to understand objects in js is to compare them with real life objects

Objects in real life have properties and things they can do

Eg a phone is an object and it has properties eg colour,size, model etc and it can make calls, take pictures etc

An object in js is no different. It has properties( Key, value pairs)

eg a user object can have properties eg email,username and gender etc
 A js object can also has methods eg- login method , logout method etc

Remember methods are function within a specific data type

Another example is a blog object

it can have these properties and more; title, content ,author

it can have these methods for example; publish,unpublish,delete etc

Javascript allows us to create objects

We can do this in a variety of different ways

Javascript also has some built in object eh Math object


WE CAN CREATE INDIVIDUAL OBJECT USING WHAT IS KNOWN AS 

OBJECT LITERAL NOTATION

HOW TO CREATE AN OBJECT USING OBJECT LITERAL NOTATION

We use curly braces {} just like we use square bracket to create an array

Each property in an object has a key value pair

Key value pairs are comma separated

let user = {
  name: "kevin", // key value pair
  age: 29,
  email: "kevinndiritu@gmail.com",
  location: "Nairobi",
  blogs: ["Why mac & cheese rules", "10 things to mkae with marmite"],
  login: function(){
    console.log("user logged in")
  }
};
console.log(user);

ACCESSING PROPERTIES FROM AN OBJECT

- WE USE DOT NOTATION

console.log(user.name);

OVERWRITING/Update VALUES IN AN OBJECT

user.age = 35;
console.log(user.age);

ACCESSING AND UPDATING USING SQUARE BRACKET NOTATION

The key has to be in quotes

console.log(user["name"]);
console.log(user["email"]);

UPDATING USING SQUARE BRACKET NOTATION

Both key and new value have to be in quotes

user["name"] = "Zahra";
console.log(user["name"]);

console.log(typeof user); // CHECKING THE DATA TYPE

NB: I PREFER DOT NOTATION

ADDING METHODS

We still use a key value pair

Remember a regular fn cannot defined inside an object but a method can


THIS KEYWORD

Inside our function we have an array of blogs

We want to cycle through the blogs and log them to the browser

Inside our logblogs function we need to be able to access the blogs
since we cannot just loop with a foreach method(blogs.forEach())

We use the this keyword which refers to this user object

This keyword is a context object and it reps the context in which
current code is executed 



let user = {
  name: "kevin",
  age: 29,
  email: "kevinndiritu@gmail.com",
  location: "Nairobi",
  blogs: ["Why mac & cheese rules", "10 things to mkae with marmite"],
  login: function () {
    console.log("user logged in");
  },
  logout: function () {
    console.log("user logged out");
  },
  logBlogs: function () {
    console.log("This user has written the following blogs:");
    this.blogs.forEach((blog)=>{
      console.log(blog);
    })
  },
};

Method invoking/Calling a method

Remember we use dot notation

user.login();
user.logout();
user.logBlogs();


NB: ARROW FUNCTION WORK DIFFERENTLY WITH THE THIS KEYWORD THATS WHY
 WE USE REGULAR FUNCTIONS

 JAVASCRIPT will not also set the value of the this keyword to be the object if we use an arrow function


OR */

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

/*OBJECTS IN ARRAYS (COMMON FORMAT IN JS, LEARN AND GRASP)

We can store objects inside of arrays
const blogs = [
  {title: "Zahra Wangari", views: 1000},
  {title: "Goosebumps", views: 200}
]

NB : A LOT OF THE TIME WHEN WE WORK WITH DATA THIS IS THE FORMAT
WE WILL BE USING BECAUSE WHEN WE RETRIEVE DATA FROM A DATABASE ITS GOING TO BE
IN FORM OF AN OBJECT FORMAT IN ARRAY

It means you need to remember that:
OBJECTS IN AN ARRAY ARE SIMPLY - AN ARRAY OF OBJECTS
*/

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

// EXAMPLE 3

const database = {
  founder: "Kevin",
  date: 2025,
  movies: [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Taking of Pelham 123",
      director: "Denzel Washington",
      year: 2009,
      rating: 9,
    },
    {
      title: "Diddy do it",
      director: "Puff daddy",
      year: 2024,
      rating: 10,
    },
  ],
  logMovies() {
    console.log("Movies");
    this.movies.forEach((movie) => {
      console.log(movie.title, movie.director, movie.year);
    });
  },
};

//REMEMBER METHODS ARE INVOKED USING DOT NOTATION
database.logMovies();
console.log(database.founder, database.movies);

/* MATH OBJECT
JAVASCRIPT HAS A BUNCH OF BUILT IN OBJECTS WHICH WE CAN USE

ONE OF THEM IS

       THE MATH OBJECT
It has several properties and methods all premade

Math object is accesed using the Math keyword. (M is in uppercase)


*/
console.log(Math); //props and methods of math object shown
console.log(Math.PI);
console.log(Math.E);

//MATH METHODS

const area = 7.2;
console.log(Math.round(area)); //rounds to nearest integer

console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area)); //takes away decimal places

/*COMMON USE CASE FOR THE MATH OBJECT

       GENERATING  RANDOM NUMBERS
we use the .random() method
it generates random numbers between 0 - 1 (including decimals)

If we wanted a random no between 0-50?       
       */

let randomNo = Math.random();
console.log(randomNo);

console.log(Math.round(randomNo * 50));

/*
PRIMITIVE AND REFERENCE DATA TYPES

There are 2 types of data types in javascript

PRIMITIVE TYPES - numbers,booleans,strings,null,undefined, symbols

- when you create eg a number and assign it to a variable
the value is stored in sth called a STACK

value stored in stack has a pointer - the variable name

A stack is just a stack of diff values in memory & can be accesed quickly

when you make a copy of a primitive data type

the copy is stored also in the stack

when you make a change to one value the other isnt changed
*/
let num1 = 10;
let num2 = num1;

console.log(num1);
console.log(num2);

// NOW lets update the value of num1

num1 = 20;

console.log(num1);
console.log(num2);

/* REFERENCE DATA TYPES

All types of Objects

STORED IN A HEAP WHICH HAS MORE SPACE BUT  ABIT SLOWER
WHEN YOU MAKE A COPY OF EG AN ARRAY THERE ARE 2 POINTERS THAT POINT TO THE SAME VALUE
A COPY EG AN ARRAY IS STORED ONCE IN MEMORY AND 2 POINTERS POINT TO THE SAME VALUE
HENCE WHEN YOU UPDATE ONE OF THEM IT UPDATES BOTH  

            EXAMPLE
*/
const user1 = {name:'zahra', age:2};
const user2 = user1;

console.log(user1, user2);

// Now lets change the value of user1
user1.name = 'Zahra Wangari'

console.log(user1, user2);

/* STEP 1 - GRABBING ELEMENTS USING QUERY SELECTOR */

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
