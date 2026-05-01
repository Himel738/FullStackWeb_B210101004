// // const kidnapped = document.getElementsByTagName("h1"); // HTMLCollection(1) [h1]
// // console.log(kidnapped)
// // console.log(kidnapped[0]) // Accessing the first (and only) h1 element in the collection
// // kidnapped[0].remove()

// const kidnapped = document.getElementById("myParagraph")
// console.log(kidnapped) // Accessing the element with the ID "myParagraph"
// kidnapped.innerHTML = "This paragraph has been modified!" // Changing the content of the paragraph element

// function changeBG()
// {
//   const  mypara = document.getElementById("myParagraph")
//   mypara.style.backgroundColor = "yellow" // Changing the background color of the paragraph element to yellow
// }

// const mybutton = document.getElementById("myButton")
// //mybutton.addEventListener("click", changeBG) // Adding a click event listener to the button that calls the changeBG function when clicked
// mybutton.addEventListener("mouseover", changeBG)

const todoform = document.getElementById('todo-form');
const todolist = document.getElementById("todo-list");
let total_task = document.getElementById("total_task");

function getToDoListFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

function addToDoListLocally(data) {
  localStorage.setItem("todo", JSON.stringify(data));
}

let todoListValue = getToDoListFromLocalStorage();

// 🔹 render
function showToDoList() {
  todolist.innerHTML = ""; // clear first

  todoListValue.forEach((todotext, index) => {
    todolist.innerHTML += `
      <div class="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
        <div class="flex items-center gap-2">
          <input type="checkbox" class="w-5 h-5 accent-purple-500">
          <span>${todotext}</span>
        </div>
        <button button-index="${index}" class="delete-btn text-gray-400 hover:text-red-500">🗑</button>
      </div>`;
  });
}
function showTotalTask() {
  total_task.innerHTML = `Total tasks: <span class="text-purple-500 font-semibold">${todoListValue.length}</span>`;
}

// 🔹 delete
function deleteTodo(index) {
  todoListValue.splice(index, 1); // delete 1 item from the index
  addToDoListLocally(todoListValue);
  showToDoList();
  showTotalTask();
}

// 🔹 add
function formSubmitHandler(event) {
  event.preventDefault();

  const todotext = event.target.todo.value.trim();

  if (!todotext) {
    return alert("Please enter a valid to-do item.");
  }

  if (todoListValue.some(item => item.toLowerCase() === todotext.toLowerCase())) {
    todoform.reset();
    return alert("This to-do item already exists.");
  }
  
  todoListValue.push(todotext);
  addToDoListLocally(todoListValue);
  showToDoList();
  showTotalTask();

  event.target.todo.value = "";
}

//  events
todoform.addEventListener("submit", formSubmitHandler);

todolist.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.getAttribute("button-index");
    deleteTodo(index);
  }
});

//  initial load
showToDoList();
showTotalTask();