/* HOW TO DELETE AN ELEMENT FROM THE DOM After clicking it

Instead of crossing the items in the todo list we want to delete it

We will create a click event listener for each item & when it's clicked
we will remove it from the DOM

*/
const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove(); // remove the clicked item from the DOM
  });
});

/* ADDING SOMETHING TO OUR TODO LIST/ ADDING STH TO A WEBPAGE

1st step get a reference to the button
*/
const button = document.querySelector('button')
