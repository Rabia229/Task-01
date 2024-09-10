
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        li.remove();
    });

    taskList.appendChild(li);

    newTaskInput.value = "";
});
