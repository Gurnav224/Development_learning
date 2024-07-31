
let todos = [
    {id:1,title:'task 1',status:'todo'},
    {id:2,title:'task 2',status:'InProgress'},
    {id:3,title:'task 3',status:'completed'},
    {id:4,title:'task 4',status:'todo'}
];

const selectedTodos = document.querySelector('#todo_select');
const todo_list = document.querySelector('#todo_list');

function renderTodo(todos){
    const todoHtmlElement = todos.map((todo)=>`
    <div>
    <h2>Id: ${todo.id}</h2>
    <p>title: ${todo.title}</p>
    <p>status: ${todo.status}</p>
    </div>
    `)

    todo_list.innerHTML = todoHtmlElement.join(' ')
}


selectedTodos.addEventListener('change',function(){
    const value = selectedTodos.value;
    let selectedtodos = value!=='All'?todos.filter((todo)=>todo.status===value):todos;
    renderTodo(selectedtodos)
})

renderTodo(todos)