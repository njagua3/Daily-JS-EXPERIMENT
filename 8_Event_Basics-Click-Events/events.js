/* 
CLICK EVENTS
I have created a html template with some to do's and a button

We want to react to a user interacting with the to do list

we want to react to user clicking the button

There are 3 steps involved:
1. Get a reference to the button
2. Attach an event listener to the button.
an event listener actively listens for user events on a specific element
3. Write a callback function which will fire when that event happens(when user clicks button)

*/

const button = document.querySelector("button");

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

const toDos = document.querySelectorAll("li"); // we get a nodelist
toDos.forEach((toDo) => {
  toDo.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
  });
});
