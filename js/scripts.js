
function addTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") {
        return;
    }
    const taskList = document.getElementById("todo-list");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    document.getElementById("new-task").value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    const taskList = document.getElementById("todo-list");
    taskList.removeChild(taskItem);
}

function clearTasks() {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = "";
}


