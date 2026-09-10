// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2025-10-15",
        assignedTo: "",
        completed: false
    }
];

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'card task-item';
        
        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div id="first-task-due">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <!-- TODO -->
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

// function for the over due date, changing color when the color is over due date
function overDueTasks(dateId,dueDate){
    const currentDate = new Date();
    const taskDueDate = new Date(dueDate);

    const targetElement = document.getElementById(dateId);

    if(currentDate > taskDueDate){
        targetElement.style.color="red";
    }
}

// function to show a small window to notify the success of the additon of new tasks
function taskForm() {
    const addBtn = document.getElementById('add-btn');
    
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('A Task Added succesfully!');
        });
    }
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    overDueTasks("first-task-due","2025-10-15");
    taskForm();
});


