const addForm = document.querySelector(".add");//reference to the form
const list = document.querySelector(".todos");//reference to the ul


//Adding a new todo
addForm.addEventListener("submit", (e) => {
  e.preventDefault();// prevents page from refreshing
  const todo = addForm.add.value.trim();//get what user types
  //checking the todo isnt empty
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();//resets input field inside form
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

//delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
//keyup event
