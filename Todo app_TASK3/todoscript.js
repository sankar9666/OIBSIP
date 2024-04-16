document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            pendingTasks.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    function createTaskItem(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("taskItem"); 
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        taskLabel.classList.add("taskName"); 
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add("deleteButton"); 
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskCheckbox.addEventListener("change", function() {
            if (taskCheckbox.checked) {
                taskLabel.classList.add("completed");
                completedTasks.appendChild(taskItem);
            } else {
                taskLabel.classList.remove("completed");
                pendingTasks.appendChild(taskItem);
            }
        });

        return taskItem;
    }
});
