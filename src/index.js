// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

  
// });



//document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskText = taskInput.value;
    
    if (taskText.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
      taskList.appendChild(newTask);
      
      taskInput.value = ''; // Clear input field after adding task
    }
  });
