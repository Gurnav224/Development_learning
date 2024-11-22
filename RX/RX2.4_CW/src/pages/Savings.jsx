import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addExpense, addIncome } from "../actions";

const Savings = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  const income = useSelector((state) => state.income) ;

  useEffect(() => {
    dispatch(addIncome())
  },[dispatch])


  useEffect(() => {
    dispatch(addExpense())
  },[dispatch])


  const totalExpense = expense.reduce((total , currentExpense) => total + currentExpense.amount,0)
  const totalIncome = income.reduce((total , currentIncome) => total + currentIncome.amount,0);

  const totalSavings = totalIncome - totalExpense;

  return (
    <div>
      <h1>Savings</h1>

      <h2>Total Expense : ${totalSavings}</h2>
    </div>
  )
}

export default Savings
