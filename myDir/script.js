// Import necessary functions
import { taskGenerator } from './taskFunctions';

// Function to initialize the application
function main() {
    const newTaskButton = document.getElementById('new_task_button');
    newTaskButton.addEventListener('click', () => addNewTask());
}

// Function to add a new task
function addNewTask() {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:", "_");
    const dueDate = prompt("Enter task due date:", "_");
    const notes = prompt("Enter task notes:", "_");
    const checklist = prompt("Enter task checklist:", "_");

    const taskGen = taskGenerator(title, description, dueDate, notes, checklist);
    const task = taskGen.next().value;
    renderTask(task);
}

// Function to render a task
function renderTask(task) {
    const tasksDiv = document.getElementById('tasks');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.name = task.title;
    taskDiv.task = task;

    const taskTitle = document.createElement('h3');
    taskTitle.innerText = task.title;
    taskDiv.appendChild(taskTitle);

    taskDiv.addEventListener('click', () => expandTask(task));
    tasksDiv.appendChild(taskDiv);
}

// Function to expand a task
function expandTask(myTask) {
    const taskMoreInfoDiv = document.createElement("div");
    const descriptionP = document.createElement("p");
    descriptionP.innerText = myTask.description;
    const dueDateP = document.createElement("p");
    dueDateP.innerText = myTask.dueDate;
    const notesP = document.createElement('p');
    notesP.innerText = myTask.notes;
    const checklistP = document.createElement('p');
    checklistP.innerText = myTask.checklist;

    taskMoreInfoDiv.appendChild(descriptionP);
    taskMoreInfoDiv.appendChild(dueDateP);
    taskMoreInfoDiv.appendChild(notesP);
    taskMoreInfoDiv.appendChild(checklistP);
    document.getElementById('tasks').appendChild(taskMoreInfoDiv);
}

// Function to delete a task
function deleteTask(myTask) {
    const tasksDiv = document.getElementById('tasks');
    const divs = tasksDiv.getElementsByClassName('task');
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].name === myTask.title) {
            tasksDiv.removeChild(divs[i]);
            break;
        }
    }
}

document.onload = main;
