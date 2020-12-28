//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton= document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//event listeners
todoInput.addEventListener("blur", resetEmptyTodoInput)
todoButton.addEventListener("click",  addTodo)
todoList.addEventListener("click", deleteCheck)

//functions

function resetEmptyTodoInput(){
    return new Promise ((resolve,reject) => {
        if (todoInput.value.trim() === ""){
            todoInput.value = ""
            reject()
        }
        else{
            resolve()
        }
    })
    
}

function addTodo(event){
    event.preventDefault()
    resetEmptyTodoInput()
    .then(() => {
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        //create li
        const newTodo = document.createElement("li")
        newTodo.innerText = todoInput.value
        todoInput.value = ""
        newTodo.classList.add("todo-item")
        todoDiv.appendChild(newTodo)
        //check button
        const checkButton = document.createElement("button")
        checkButton.innerHTML = '<i class="fas fa-check-circle"></i>'
        checkButton.classList.add("check-button")
        todoDiv.appendChild(checkButton)
        //bin button
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = '<i class="fas fa-times-circle"></i>'
        deleteButton.classList.add("delete-button")
        todoDiv.appendChild(deleteButton)
        //append to list
        todoList.appendChild(todoDiv)
    })
}

function deleteCheck(event){
    const item = event.target
    if(item.classList[0] === "delete-button"){
        item.parentElement.remove();
    }
}
