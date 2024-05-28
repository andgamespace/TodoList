 task = {
    set_title = "_",
    description: "_",
    dueDate: "_",
    notes: "_",
    checklist: "_"
}

function*  taskGenerator(set_title, set_description, set_due_date, set_notes, set_checklist) {
        
        object = {
            title: set_title,
            description: set_description,
            dueDate: set_due_date,
            notes: set_notes,
            checklist: set_checklist
            }
            
        if(set_description == 0){
            object.description = "_"
        } else{
            object.description = set_description;
        }
     
        if(set_due_date == 0){
            object.dueDate = "_";
        } else{
            object.dueDate = set_due_date;
        }

        if(set_notes == 0){
            object.notes = "_";
        }else{
            object.notes = set_notes;
        }

        if(set_checklist == 0){
            object.checklist = "_";
        }else{
            object.checklist = set_checklist;
        }
        
        return object;
    }
}
function* projectGenerator(set_title, set_description, set_due_date, set_notes, set_tasks){
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

function viewAllProjects(){
    do null;
    while(false);
}
function viewAllTasksInProject(){
    do null;
    while(false);
}
function expandTask(){
    do null;
    while(false);
}
function deleteTask(){
    do null;
    while(false);
}



function main(){

}
document.onload(main);