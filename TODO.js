// app.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const timestamp = new Date().toLocaleString();

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText} <span class="timestamp">(Added: ${timestamp})</span>
        <div class="task-actions">
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    document.getElementById('pendingTasksList').appendChild(taskItem);

    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const completedList = document.getElementById('completedTasksList');
    const timestamp = new Date().toLocaleString();

    taskItem.classList.add('completed');
    taskItem.querySelector('.timestamp').textContent = 
    taskItem.querySelector('.task-actions').innerHTML = `
        <button onclick="deleteTask(this)">Delete</button>
    `;
    completedList.appendChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const newTaskText = prompt('Edit your task:', taskItem.childNodes[0].nodeValue.trim());
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.childNodes[0].nodeValue = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}