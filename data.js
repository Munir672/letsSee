const addTodo = () => {
    // Get the container for the task list
    let container = document.getElementById("task-list");

    // Get the input field value
    let inputField = document.getElementById("task-input");
    let taskText = inputField.value.trim(); // Remove any leading/trailing spaces

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    let taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    // Create a delete button for the task
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DONE";
    
    // Add event listener to the delete button to remove the task
    deleteButton.addEventListener("click", () => {
        container.removeChild(taskItem); // Remove the task item from the list
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Add the new task item to the list
    container.appendChild(taskItem);

    // Clear the input field after adding the task
    inputField.value = "";
}

// Attach the event listener to the Add button
document.getElementById("add-task-btn").addEventListener("click", addTodo);

// Allow users to press Enter to add a task
document.getElementById("task-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();  // Trigger the addTodo function when Enter is pressed
    }
});
