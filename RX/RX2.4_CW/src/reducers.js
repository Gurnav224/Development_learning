const initialState = {
  income: [],
  expense: [],
  savings: [],
};

function financeReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        income: action.payload,
      };
    case "FETCH_EXPENSES_SUCCESS":
      return {
        ...state,
        expense: action.payload,
      };
    case "FETCH_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: action.payload,
      };
    case "ADD_ENTERY_SUCCESS":
      console.log(action.payload)
      if (action.payload.entryType === "income") {
        return {
          ...state,
          income: [...state.income, action.payload],
        };
      } else {
        return {
          ...state,
          expense: [...state.expense, action.payload],
        };
      }

    default:
      return state;
  }
}

export default financeReducer;
