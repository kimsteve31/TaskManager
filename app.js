// Selectors
const addItemButton = document.querySelector('#add');
const inputItem = document.getElementById("add-item");
const taskList = document.querySelector('#ul-task-list');

// Event Listener
addItemButton.addEventListener('click', addItem);
taskList.addEventListener('click', updateItem);

// Functions

// This function adds new items to the list
function addItem(event) {
    event.preventDefault();
    // Check for empty Task
    if (inputItem.value.length === 0) {
        return false; 
    }
    // Create A list element
    const todoLi = document.createElement('li');
    todoLi.classList.add("item");
    // Create options
    const todoName = document.createElement('p');
    todoName.classList.add('item-name');
    todoName.innerText = inputItem.value;
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("item-options");
    const todoButtonCheck = document.createElement("button");
    todoButtonCheck.classList.add("check");
    todoButtonCheck.innerHTML = '<i class="fa fa-check-circle fa-lg"></i>';
    const todoButtonTrash = document.createElement("button");
    todoButtonTrash.classList.add("trash");
    todoButtonTrash.innerHTML = '<i class="fa fa-trash fa-lg"></i>';
    // Append All Childs
    todoLi.appendChild(todoName);
    todoLi.appendChild(todoDiv);
    todoDiv.appendChild(todoButtonCheck);
    todoDiv.appendChild(todoButtonTrash);
    taskList.appendChild(todoLi);
    inputItem.value = "";
}

// This function checks an item to be complete or removes it
function updateItem(event) {
    const item = event.target.parentElement;
    const itemParent = item.parentElement.parentElement;
    if(item.classList[0] === 'trash') {
        itemParent.remove();
    }
    if(item.classList[0] === 'check') {
        itemParent.style.backgroundColor = "#90ee90";
        item.parentElement.style.justifyContent = 'flex-end';
        item.remove();
    }
}