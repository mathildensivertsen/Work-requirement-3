
let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];

const todoList = document.getElementById(todoList)
const todoInput = document.getElementById(todoInput)
const addButton = document.getElementById(addButton)


function createTodoElement(todo) {
    const li = document.createElement('li')
    li.className = 'todo-item'

    const span = document.createElement('span')
    span.className = 'todo-text'
    span.textContent = todo.text

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-button'
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteTodo(todo.id)
    }) 

    li.appendChild(span)
    li.appendChild(deleteBtn)

    return li


}

// Create todo item element
function createTodoElement(todo) {
    // TODO: Implement this function
    // 1. Create a new <li> element
    // 2. Add the 'todo-item' class to the <li>
    // 3. Create a <span> for the todo text
    // 4. Set the span's text content to todo.text
    // 5. Create a delete button
    // 6. Add a click event listener to the delete button that calls deleteTodo(todo.id)
    // 7. Append the span and delete button to the <li>
    // 8. Return the <li> element
}

// Render todos
function renderTodos() {
    // TODO: Implement this function
    // 1. Clear the existing list
    // 2. Loop through the todos array
    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
}

// Add todo
function addTodo() {
    // TODO: Implement this function
    // 1. Get the text from the input field
    // 2. If the text is not empty:
    //    a. Create a new todo object with a unique id and the input text
    //    b. Add the new todo object to the todos array
    //    c. Clear the input field
    //    d. Call renderTodos() to update the display
}

// Delete todo
function deleteTodo(id) {
    // TODO: Implement this function
    // 1. Remove the todo with the given id from the todos array
    // 2. Call renderTodos() to update the display
}

// TODO: Add a click event listener to the add button that calls addTodo

// TODO: Add a keypress event listener to the input field 
// that calls addTodo when the Enter key is pressed

// Initial render
renderTodos();