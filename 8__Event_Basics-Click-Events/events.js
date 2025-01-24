/* 
CLICK EVENTS
I have created a html template with some to do's and a button

We want to react to a user interacting with the to do list

we want to react to user clicking the button

There are 3 steps involved:
1. Get a reference to the button
2. Attach an event listener to the button.
an event listener actively listens for user events on a specific element
- To add an event listener we use a method called .addEventListener()

-The first parameter is the event we want to listen to. In this case "click"

- The second parameter is a callback function that fires when the user clicks button

3. Write a callback function which will fire when that event happens(when user clicks button)


FIRST STEP
*/

const button = document.querySelector("button");

// SECOND STEP - Adding an event listener to button
button.addEventListener("click", () => {
  console.log("button clicked");
});
/* addEventListener() first parameter is what event listener we are listening to
2nd parameter is the callback function

Now i want to attach event listener to each li tag so that when a user clicks on an li tag
we delete them from the to do list

HOW DO WE DO THIS? Just like diddy

Get a reference to the li tags
*/

const toDos = document.querySelectorAll("li"); // we get a nodelist. Always check if its a nodelist or a HTML Collection
toDos.forEach((toDo) => {
  toDo.addEventListener("click", (e) => {
    console.log(e.target);// lets us know which li tag was clicked
    e.target.style.textDecoration = "line-through";
  });
});

/* When an event occurs in the browser like a click event
inside our callback function, the browser automatically gives us a
parameter called e or events. I prefer calling it e

The e parameter contains info about the event that happened on the webpage

console.log(e.target) - tells us which element we clicked on

Since we now know which li tag was clicked we can do sth with it

e.target also when it comes to event delegation

e.target is the element that triggered the event
*/
