import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchExpense } from "../actions";

const Expense = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense);
  const total = expenses.reduce((total, expense) => total + parseInt(expense.amount),0);


  useEffect(() => {
    dispatch(fetchExpense())
  },[dispatch])



  return (
    <div>
      <h1>Expense</h1>
      <ul>
        {
          expenses.map((expense , index) => ( <li key={index}>

            {expense.description} - ${expense.amount}
          </li> ))
        }
      </ul>
      <h2>Expense Total: ${total}</h2>
    </div>
  )
}

export default Expense
