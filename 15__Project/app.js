const addForm = document.querySelector(".add"); //reference to the form
const list = document.querySelector(".todos"); //reference to the ul
const search = document.querySelector(".search input"); //reference to the input field

// STEP 1: Adding a new todo
addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page from refreshing
  const todo = addForm.add.value.trim(); //get what user types
  //checking the todo isnt empty
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); //resets input field inside form
  }
});

// fn that generates a html template and add to browser/todo list
const generateTemplate = (todo) => {
  const html = `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;
  list.innerHTML += html;
};

//STEP 2: Delete todos - Event delegation
/*Event delegation helps because
- less work for JS to do & more efficient in terms of perfomance

- we're only attaching 1 event listener to the parent element(ul)

  - instead of attaching an event listener to each individual li tag

  - Attach an event listener to the parent element (in this case the ul)
 
 - whenever we add a new todo using the form we do not need to worry 
 about attaching event listeners to the new li tags
  */
list.addEventListener("click", (e) => {
  // Check if the target is an i (trash icon) and if it has the delete class
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

/*Search Form
Search & Filter

- Add a keyup event listener to the search input field
*/
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();

  filterToDos(term);
});

// Search & Filter

const filterToDos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

