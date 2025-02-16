const inputBox = document.getElementById("task-input");
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const removeAllTask = document.getElementById("remove-all-task");

// console.log(inputBox.value);
addTask.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("please fill task");
  } else {
    let task = document.createElement("li");
    task.innerText = inputBox.value;
    taskContainer.appendChild(task);

    let btn = document.createElement("button");
    btn.innerText = "x";
    task.appendChild(btn);

    btn.addEventListener("click", () => {
      task.remove();
    });

    inputBox.value = "";
  }
});

removeAllTask.addEventListener("click", () => {
  taskContainer.innerHTML = "";
});
