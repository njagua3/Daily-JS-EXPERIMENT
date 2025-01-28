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

const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // get the values from the form inputs
  console.log(form.username.value);
});
