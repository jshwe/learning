const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const task = taskInput.value;
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
  taskInput.value = "";
});
