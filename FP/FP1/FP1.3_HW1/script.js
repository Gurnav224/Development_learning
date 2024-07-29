
let employees = [
    {
        id:1,
        name:'Alice',
        position:'Developer'
    },
    {
        id:2,
        name:'Bob',
        position:'Designer'
    },
    {
        id:3,
        name:'Charlie',
        position:'Manager'
    },
    {
        id:4,
        name:'David',
        position:'Tester'
    }
];


const employeeListContainer = document.querySelector('#employee__list');


const employeeListHtml = employees.map((employee)=>(
    `<div>
    <h2><strong>ID: </strong>${employee.id}</h2>
    <p><strong>Name: </strong>${employee.name}</p>
    <p><strong>Position: </strong>${employee.position}</p>
    <hr>
    </div>
    `
))


employeeListContainer.innerHTML = employeeListHtml.join(' ');