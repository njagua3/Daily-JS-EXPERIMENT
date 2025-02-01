/* 
We currently have the knowledge of events and events listeners

They are used a lot with web forms

Web forms exist to capture some kind of data or info from a user

eg sign in form, customer feedback form

We are capturing data or info from a user

We are going to use events to capture that information

We are interested with the submit events of forms

This is when a user clicks the submit button at the bottom 
of the form once filled in

Click in the submit button is not only a click event but also a
submit event on the form itself

Other kind of events that go hand in hand with web forms are;

- Keyboard events - we can detect if a user presses or realeses a key on their keyboard
       - we can also check if they have their alt or shift key pressed

In the html file we have a simple form with a submit button

get a reference to the sign up form

add an event listener to the form
When we are listening for a submit event we attach event
listener to form itself and not to the submit button
*/

// const form = document.querySelector(".signup-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // get the values from the form inputs
//   console.log(form.username.value);
// });

/*

                REGULAR EXPRESSIONS/ REGEX
They are not unique to Js. Used also in other languages eg python

Regex allow us to type out character patterns to rep certain values

We start of by deciding what kind of pattern we want to match
eg how long it should be, type of xcters it should contain

Then write a regex to match that pattern

Regular expressions start with forward slash and end with the same





TESTING REGEX

How to use regex in a javascript file

Below we have username and i want to create a regular expression
to make sure that the username is atleast 6 xcters long
*/

const userName = "kevinn";

/*Create a regex and store it in a constant*/

const pattern = /^[a-z]{6,}$/;

/*
In JS we can use a method called test on a pattern

Now we test the regex with the username

If the regex matches the username, the test will pass */

let result = pattern.test(userName); // returns a boolean

console.log(result); // true

if (result) {
  console.log("Username is valid :)");
} else {
  console.log("Username is invalid :(");
}

/*BASIC FORM VALIDATION

We have our form and we are listening for a submit event on the form
and preventing the default action

Now next i want to check if the user has tapped into thefield
and validate it using some simple validations and some regex

I want the username to be between 6-12 xcters in length
& only contain lowercase or uppercase letters. No numbers or symbol

FIRST: - Get a handle on the username value

*/
const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback"); //ref to feedback div
const usernamePattern = /^[a-zA-Z]{6,12}$/; //characters must be between a- or A-Z snd must be 6-12 characters
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // get the values from the form inputs
  const username = form.username.value;
  //const usernamePattern = /^[a-zA-Z]{6,12}$/; - change to a global variable

  if (usernamePattern.test(username)) {
    feedback.textContent = "username is valid";
  } else {
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long";
  }
});

/*KEYBOARD EVENTS

LIVE FEEDBACK

Get the username input field
*/
form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
