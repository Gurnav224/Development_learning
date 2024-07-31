

const employees = [
    {id:1,name:'Alice',Experience:'2'},
    {id:2,name:'Bob',Experience:'9'},
    {id:3,name:'Charlie',Experience:'4'},
    {id:4,name:'John',Experience:'19'}
];

const employee__list = document.querySelector('#employee__list');
const experienceCheck = document.querySelector('#experienceCheck');


function renderEmployee(filterByExpience){

    const filterEmployee = filterByExpience ? employees.filter((employee)=>employee.Experience>5) : employees
    
    const employeeDetails = filterEmployee.map((employee)=>`
    <div>
    <h2>Id: ${employee.id}</h2>
    <p>Name: ${employee.name}</p>
    <p>Experience: ${employee.Experience}</p>
    <hr>
    </div>
    `);

    employee__list.innerHTML = employeeDetails.join(" ")
}


experienceCheck.addEventListener('change',function(){
    renderEmployee(experienceCheck.checked)
})

renderEmployee(false)