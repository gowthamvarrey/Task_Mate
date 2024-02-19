function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerText = taskInput.value;
  
      newTask.onclick = function() {
        this.classList.toggle("completed");
      };
  
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  