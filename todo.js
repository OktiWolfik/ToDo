function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert("Please enter a task!");
    }

}

function removeTask(taskItem) {
    var taskList = document.getElementById("taskList");

    taskList.removeChild(taskItem.parentNode);
}