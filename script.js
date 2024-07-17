document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // This function is responsible for adding new tasks
    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === ""){
            alert('Please enter a task.')
        } 
        if(taskText != "") {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Activating the remove button
            const removeButton = document.createElement('button')
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.addEventListener('click', function() {
                taskList.removeChild(listItem)
            })
                
            
                
            
               
            
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear the task input field
            taskInput.value = " ";
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) =>{
        if(event.key === 'Enter'){
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', addTask);
});
