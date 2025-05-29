import AddExpenseForm from "./components/AddExpense"
import ExpenseList from "./components/ExpensList"


function App() {
  return (
    <>
     <h1 className="text-3xl py-5 text-center bg-blue-300 ">React Expense Tracker</h1>
     <AddExpenseForm/>
     <ExpenseList/>
    </>
  )
}

export default App
