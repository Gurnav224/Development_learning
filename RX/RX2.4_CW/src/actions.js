

export const addIncome = (income) => async (dispatch) => {
    try {
        const response = await fetch('https://finance-app-backend-Student-neoG.replit.app/add-income',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(income)
        })

        const data = await response.json();


        if(data.success === true){
            console.log(data)
            dispatch({type:"ADD_ENTRY_SUCCESS",payload:data})
        }
    } catch (error) {
        console.error('Error adding income entry',error)
    }
}


export const addExpense = (expense) => async (dispatch) => {
    try {
        const response = await fetch('https://finance-app-backend-student-neog.replit.app/add-expense',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(expense)
        })
        const data = await response.json();

        if(data.success === true) {
            console.log(data)
            dispatch({type:"ADD_ENTRY_SUCCESS",payload:data})
        }
    } catch (error) {
        console.error('Error adding expense entry',error)
    }
}



export const fetchIncome = () => async (dispatch) => {
    try {
        const response = await fetch('https://finance-app-backend-Student-neoG.replit.app/income');
        const data = await response.json();

        if(data) {
            dispatch({type:"FETCH_INCOME_SUCCESS",payload:data})
        }

    } catch (error) {
        console.error('Error while fetching income',error)
    }
}


export const fetchExpense = () => async (dispatch) => {
    try {
        const response = await fetch('https://finance-app-backend-Student-neoG.replit.app/expenses');
        const data = await response.json();
        if(data){
            dispatch({type:"FETCH_EXPENSES_SUCCESS",payload:data})
        }
    } catch (error) {
        console.error('Error while fetching expenses',error)
    }
}