export default function* projectGenerator(set_title, set_description, set_due_date, set_notes, set_tasks){
    myProject = {
        title: set_title,
        description: set_description,
        dueDate: set_due_date,
        notes: set_notes,
        tasks: []
    }
    tasks.forEach(() => {
        const taskDetails = taskString.split(','); // Splitting each task string by commas to get task properties
        const task = taskGenerator(taskDetails, 0,0,0,0); // Creating a new Task by spreading the array into the constructor
        myProject.tasks.push(task);
    });


}

export default function viewAllProjects(){
    do null;
    while(false);
}
export default  function viewAllTasksInProject(project){
    for(let i = 0; i < project.tasks.length; i++){
        tasks.push(project.tasks[i]);
    }
}