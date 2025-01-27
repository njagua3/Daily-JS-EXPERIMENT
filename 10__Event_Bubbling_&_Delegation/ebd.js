/* BEFORE WRITING YOUR NEXT CODE VISUALIZE EVERYTHING IN YOUR MIND LIKE A STORY
Its ALL  CONNECTED MF
JUST THINK OF WHAT IT IS YOU WANT TO DO
EG
YOU WANT TO ADD A NEW LI TAG IN AN UNORDERED LIST 
SO YOU MUST GET A REFERENCE TO THAT UL

const ul = document.querySelector("ul");

YOU ALSO NEED A REFERENCE TO THE BUTTON CLICKED FOR ADDING A NEW LI TAG 


const button = document.querySelector("button");

button.addEventListener("click", (e) => {
e.target.classList.add("
}
what is a stack and a heap? whats the difference
global scope vs local scope

window object vs the local object

do you understand what we mean by normal fn cannot be defined in an object
but methods can be defined in an object
 do you understand an array of objects - basically this is what you will work with 90% 
 
Try and visualize even the basics like math function what it does, its use cases, forEACH method application, the this keyword etc
Programming is more of understanding what youre doing and less of coding
Make sure you do that tomorrow and also make it a habit

FEAR A MAN WHO HAS PRACTICED A SINGLE KICK A THOUSANDS TIMES

EVENT BUBBLING & DELEGATION

When an event occurs eg a click event or whatever element we click
that element becomes the event target
we have seen this thrugh the e.target

Eg when we click a specific li that li becomes the event target

When this happens js will look to see if we have any event listeners
attached to this element and fire the callback fn

That event then bubbles up the dom from the event target to its
parent

The event bubbles up to the next parent, checks for a callback fn and so forth


*/
const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = "New To Do";
  ul.append(newLi);
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log("event in li");
//     e.stopPropagation(); // stops the event from bubbling up to the parent
//     e.target.remove();
//   });
// });

/* 
      Adding an event listener to the ul 

We already have a reference to the ul

Stop propagation method - e.stopPropagation()

We want to stop the event from bubbling up to the parent

Another thing closely related to event bubbling is event delegation

-Useful when we want to attach  event listeners to many different
elements like the li tags

-Instead of attaching an event listener to each individual li tag

  - Attach an event listener to the parent element (in this case the ul)

  - This event listener will fire when the event occurs on the ul

- When we click sth inside the ul the event bubbles up to the ul and fires the callback fn
attached to the ul

- This will apply even to the new li tags created when we click the add button


  */

ul.addEventListener("click", (e) => {
  //console.log("event in ul");
  //console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
