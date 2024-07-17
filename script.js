document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // This function is responsible for adding new tasks
    function addTask(taskText, save = true){
        taskText = taskInput.value.trim();
        if(taskText === ""){
            alert('Please enter a task.')
        } 
        if(taskText != "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Activating the remove button
            const removeButton = document.createElement('button')
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener('click', function() {
                taskList.removeChild(listItem)
                const deletedTasks = JSON.parse(localStorage.removeItem(listItem) || '[]');
                localStorage.setItem('tasks', JSON.stringify(deletedTasks));
            })
            
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear the task input field
            taskInput.value = " ";
        }

        // Updating the task addition functionality
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Loading tasks from local storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) =>{
        if(event.key === 'Enter'){
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        addTask();
    });
});
