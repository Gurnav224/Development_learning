export const ADD_EXPENSE = "add_expense";
export const ADD_INCOME  = "add_income";

export const addIncome = (amount) => ({
    type:ADD_INCOME,
    payload:amount
})

export const addExpense = (amount) => ({
    type:ADD_EXPENSE,
    payload:amount
})