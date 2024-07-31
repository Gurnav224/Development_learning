
const tasks = [
    {id:1,title:'Task 1',status:'todo'},
    {id:2,title:'Task 2',status:'completed'},
    {id:3,title:'Task 3',status:'inProgress'},
    {id:4,title:'Task 4',status:'todo'},
    {id:5,title:'Task 5',status:'completed'}
];



const taskList = document.querySelector('#task__list');
const filterRadioButton = document.getElementsByName('status');


function renderTask(selectedTask){

    const filterTask = selectedTask==='all'? tasks: tasks.filter((task)=>task.status===selectedTask)

const taskDetailsHtml = filterTask.map((task)=>`<li>
    <h2><strong>ID: </strong> ${task.id}</h2>
    <p><strong>Title: </strong> ${task.title}</p>
    <p><strong>Status: </strong> ${task.status} </p>
    <hr>
</li>
`)

taskList.innerHTML = taskDetailsHtml.join('')
}


renderTask('all')


filterRadioButton.forEach((filterBtn)=>{
    filterBtn.addEventListener('change',function(){
        renderTask(this.value)
    })
})