
let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];

const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')


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

function renderTodos() {
    todoList.innerHTML = ''
    todos.forEach(todo => {
    
    todoList.appendChild(createTodoElement(todo))

    })
    
}

function addTodo() {
    const navn = todoInput.value

    if (navn !== '') {
        const newTodo = { id: Date.now(), text: navn}
        todos.push(newTodo) 
        todoInput.value = ''
        renderTodos()
    }
}

function deleteTodo(id) {
    const nyListe = []

    todos.forEach ( todo => {
        if (todo.id !== id) {
        nyListe.push(todo)
        }
    })

    todos = nyListe
    renderTodos()
}

addButton.addEventListener('click', () => {
        addTodo()
})

addButton.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo()
    }
})

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo()
    }
})

renderTodos();