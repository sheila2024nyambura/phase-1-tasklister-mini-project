document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the task description from the input field
    const taskDescription = document.getElementById('new-task-description').value;

    if (taskDescription) {
      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      // Create a delete button for the task item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      // Add a click event listener to the delete button
      deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
      });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      document.getElementById('new-task-description').value = '';
    }
  });
});
