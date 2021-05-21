// İhtiyaç duyacağımız tüm elementleri seçelim

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}


function addTodo(e){
    const newTodo = todoInput.value.trim();

    if(newTodo === "") {
        showAlert("Lütfen bir todo girin !","danger");
    }else if(isInclude(newTodo)){
        showAlert("Lütfen baska bir todo girin !","warning");
        todoInput.value = "";
    }else {
        addTodoToUI(newTodo);
        addTodoToLS(newTodo);
        showAlert("Todo başarıyla eklendi !","success");
    }
    e.preventDefault();
}

function isInclude(newTodo){
    let todos = getTodosFromLS();
    return todos.includes(newTodo);
}

function addTodoToUI(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.appendChild(document.createTextNode(newTodo));

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";
    a.innerHTML = `<i class="fas fa-asterisk"></i>`;

    li.appendChild(a);
    todoList.appendChild(li);

    todoInput.value = "";
}

function showAlert(msg,type) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    alert.appendChild(document.createTextNode(msg));

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },2000);    
}

function getTodosFromLS(){
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToLS(newTodo) {
    let todos = getTodosFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromLS();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function deleteTodo(e){
    if(e.target.classList.contains("fas")) {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromLS(e.target.parentElement.parentElement.textContent);
        showAlert("Todo Başarıyla Silindi","success");
    }
}

function deleteTodoFromLS(textContent){
    let todos = getTodosFromLS();
    todos.forEach(function(todo,index){
        if(todo === textContent) {
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const txt = listItem.textContent.toLowerCase();
        if(txt.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display: none !important");
        }else{
            listItem.setAttribute("style","display: block");
        }
    });
}

function clearAllTodos(){
    if(confirm("are you sure ? ")){
        // todoList.innerHTML = "";
        do{
            todoList.firstElementChild.remove();
        }while(todoList.firstElementChild)
        
        localStorage.removeItem("todos");
        showAlert("Bütün Todolar Temizlendi","danger");
    }
}
