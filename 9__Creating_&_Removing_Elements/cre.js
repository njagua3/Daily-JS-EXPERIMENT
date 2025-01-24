/* HOW TO DELETE AN ELEMENT FROM THE DOM After clicking it

Instead of crossing the items in the todo list we want to delete it

We will create a click event listener for each item & when it's clicked
we will remove it from the DOM

we use the .remove() method. 
Let's say we wanted to remove the whole ul for example:

const ul = document.querySelector('ul');

ul.remove();  - would remove the whole ul
*/
const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove(); // remove the clicked item from the DOM
  });
});

/* ADDING SOMETHING TO OUR TODO LIST/ ADDING STH TO A WEBPAGE
When we click the button we want to add sth new to do on our list

1st step get a reference to the button
*/
const ul = document.querySelector("ul"); // since we will be adding new li to the ul
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newToDo = document.createElement("li"); // create a new li
  newToDo.textContent = "New To Do"; // add some text
  ul.append(newToDo); // add the new li to the ul
  // or ul.prepend(newToDo); // add the new to do at the top
});

/* When we add the new li remember we havent attached event listeners 
to them
we have only attached event listeners to the initial li tags

We will combat this in the next chapter using event delegation
*/