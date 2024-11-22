import { useState } from "react";
import { useDispatch } from "react-redux";
import {  addExpense, addIncome } from "../actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [financeRecord, setFinanceRecord] = useState({
    description: "",
    amount: "",
    entryType: "income",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFinanceRecord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEntry = (event) => {
    event.preventDefault();

    if(financeRecord.entryType === "income"){

      dispatch(addIncome(financeRecord));
    }
    else{
      dispatch(addExpense(financeRecord))
    }


    setFinanceRecord({
    description: "",
    amount: "",
    entryType: "",
  })
  };


  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={financeRecord.description}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={inputChangeHandler}
            value={financeRecord.amount}
          />
        </div>
        <div>
          <label htmlFor="entryType">Entery Type:</label>
          <select name="entryType" id="entryType" onChange={inputChangeHandler}>
            <option value="income" defaultChecked>Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button onClick={handleAddEntry} type="button">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
