function addTask() {
    var taskInput = document.getElementById("taskInput");
    var descriptionInput = document.getElementById("descriptionInput");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    var taskTitle = taskInput.value;
    var description = descriptionInput.value;
    var date = new Date().toLocaleString(); // Get current date and time

    var taskSummary = document.createElement("div");
    taskSummary.className = "taskSummary";
    taskSummary.innerHTML = `
        <div>${taskTitle}</div>
        <div>${description}</div>
        <div>${date}</div>
        <div><button onclick="markDone(this)">Done</button></div>
        <div><button onclick="editTask(this)">Edit</button></div>
        <div><button onclick="deleteTask(this)">Delete</button></div>
    `;

    document.querySelector(".right .pendingTasks").appendChild(taskSummary);

    taskInput.value = "";
    descriptionInput.value = "";
}

function markDone(button) {
    var taskSummary = button.parentNode.parentNode;
    var completedTasks = document.querySelector(".right .completedTasks");
    completedTasks.appendChild(taskSummary);
    button.remove(); // Remove the "Done" button from completed tasks
}

function editTask(button) {
    var taskSummary = button.parentNode.parentNode;
    var taskTitle = taskSummary.children[0].textContent;
    var description = taskSummary.children[1].textContent;
    var newTaskTitle = prompt("Edit Task Title:", taskTitle);
    var newDescription = prompt("Edit Description:", description);
    
    if (newTaskTitle !== null && newDescription !== null) {
        taskSummary.children[0].textContent = newTaskTitle;
        taskSummary.children[1].textContent = newDescription;
    }
}

function deleteTask(button) {
    button.parentNode.parentNode.remove();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.getElementById("descriptionInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});