//Selectors
const todoInput = document.getElementById('input-to-do');
const todoButton = document.getElementById('submit-to-do');
const todoList = document.getElementById('todo-list');

//Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);

//Functions
function addTodo(event){
    //No null can be input
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //
    const editedBtn = document.createElement('button');
    editedBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editedBtn.classList.add("edit-btn");
    todoDiv.appendChild(editedBtn);
    //
    
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);   
    
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);   
    
    todoList.appendChild(todoDiv);

    // const newTodoText = todoInput.value;
    // todoInput.value = '';

    // const listItem = document.createElement('li');
    // const checkBox = document.createElement('input');
    // const todoText = document.createElement('span');
    // const deleteTodo = document.createElement('button');

    // checkBox.type = 'checkbox';
    // todoText.textContent = newTodoText;
    // deleteTodo.textContent = 'Delete';
    
    // listItem.appendChild(checkBox);
    // listItem.appendChild(todoText);
    // listItem.appendChild(deleteTodo);

    // todoList.append(listItem);



    // if (todoInput.value !== ''){
    //     const todoItem = document.createElement('li');
    //     todoItem.classList.add('todo-item');
    //     todoItem.innerText = todoInput.value;
    //     todoList.appendChild(todoItem);
    //     todoInput.value = '';
    // }
}

function deleteTodo(e) {
    const item = e.target;
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.classList.add("fall-effect");
        todo.addEventListener('transitionend',function(){
            todo.remove();
            // todo.classList.add("transitioning");
        });
    }

    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    if (item.classList.contains('edit-btn')) {
        const todo = item.parentElement;
        const todoText = todo.querySelector('.todo-item');
        const newTodoText = prompt("Edit your task:", todoText.innerText);

        if (newTodoText !== null && newTodoText.trim() !== '') {
            todoText.innerText = newTodoText;
        }
    }
}
