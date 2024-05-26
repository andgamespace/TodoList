

function*  taskGenerator(set_title, set_description, set_due_date, set_notes, set_checklist, set_status) {
    return{
    title: set_title,
    description: set_description,
    dueDate: set_due_date,
    notes: set_notes,
    checklist: set_checklist,
    status: set_status
    }
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
function markComplete(task){
    task.status = complete;
}

var tasks=[
{
    title:"",
    description:"",
    dueDate:"",
    notes:"",
    checklist:""
},
{
    title:"",
    description:"",
    dueDate:"",
    notes:"",
    checklist:""
},
{
    title:"",
    description:"",
    dueDate:"",
    notes:"",
    checklist:""
},

]
function main(){
    
}
document.onload(main);