import { useState } from "react"
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../actions";

const IncomeExpenseForm = () => {
    const [amount , setAmount] = useState(0);
    const dispatch = useDispatch()

    const handleIncomeAmount = () => {
        dispatch(addIncome(parseFloat(amount)))
    }

    const handleExpenseAmount = () => {
        dispatch(addExpense(parseFloat(amount)))
    }


  return (
    <div>
    <h1>Expense Form / Income Form </h1>
      <input type="number" onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={handleIncomeAmount}>Add Income</button>
      <button onClick={handleExpenseAmount}>Add Expense</button>
    </div>
  )
}

export default IncomeExpenseForm
