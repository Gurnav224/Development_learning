import React, { createContext, useContext, useReducer } from "react";
import type { EXPENSE } from "../data";
import { expenseData } from "../data";

interface StateType {
    expense: EXPENSE[];
  }
  
  interface ActionType {
    type: "ADD";
    payload: EXPENSE;
  }
  
  interface Props {
    children: React.ReactNode;
  }

interface ExpenseContextType {
    state:StateType,
    dispatch:React.Dispatch<ActionType>
}

const initialState: StateType = {
    expense: expenseData,
  };

const ExpenseContext = createContext< ExpenseContextType | undefined>(undefined);





function expenseReducer(state: StateType, action: ActionType) {
  switch (action.type) {
        case 'ADD':
            return {expense:[...state.expense, action.payload]}
        default:    
        return state
  }
}

export const ExpenseProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};


export const useExpense = () =>  {
    const context = useContext(ExpenseContext)
    if(!context){
        throw new Error("useExpense must be with in an ExpenseProvider")
    }
    return context
}