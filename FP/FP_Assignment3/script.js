const expenses = [
  { id: 1, name: "Groceries", amount: 150 },

  { id: 2, name: "Utilities", amount: 80 },

  { id: 3, name: "Dining Out", amount: 120 },

  { id: 4, name: "Transportation", amount: 50 },
];

const checkExpensive = document.querySelector("#expensive100");
const expenseList = document.querySelector("#expenselist");
const totalExpense = document.querySelector("#totalExpense");

function renderExpenseItem(check) {
    expenseList.innerHTML = ""
  const filteredArray = check
    ? expenses.filter((expense) => expense.amount >= 100)
    : expenses;

  const total = filteredArray.reduce((total, current) => {
    const totalExpense = total + current.amount;


    const li = document.createElement("li");
    li.innerHTML = `
            <div>
            <h2>Id: ${current.id} </h2>
            <p>name: ${current.name} </p>
            <p>Amount: ${current.amount} </p>
            </div>
        
        `;

    expenseList.appendChild(li);

    return totalExpense;
  }, 0);

  totalExpense.innerHTML = `Total Expense ${total}`;
}

checkExpensive.addEventListener("click", function () {
  renderExpenseItem(checkExpensive.checked);
});

renderExpenseItem(false);
