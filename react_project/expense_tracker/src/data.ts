
export interface EXPENSE {
    description: string,
    amount: number,
    category: string,
    date: string
}

export const expenseData: EXPENSE[] = [
    {
        "description": "Grocery shopping at Walmart",
        "amount": 56.75,
        "category": "Groceries",
        "date": "2025-05-01"
    },
    {
        "description": "Monthly Netflix subscription",
        "amount": 15.99,
        "category": "Entertainment",
        "date": "2025-05-01"
    },
    {
        "description": "Uber ride to office",
        "amount": 12.50,
        "category": "Transport",
        "date": "2025-05-02"
    },
    {
        "description": "Lunch at Subway",
        "amount": 9.25,
        "category": "Food",
        "date": "2025-05-03"
    },
    {
        "description": "Electricity bill payment",
        "amount": 88.60,
        "category": "Utilities",
        "date": "2025-05-03"
    },
    {
        "description": "Purchase of React course",
        "amount": 29.99,
        "category": "Education",
        "date": "2025-05-04"
    },
    {
        "description": "Coffee at Starbucks",
        "amount": 4.50,
        "category": "Food",
        "date": "2025-05-04"
    },
    {
        "description": "New running shoes from Nike",
        "amount": 120.00,
        "category": "Shopping",
        "date": "2025-05-05"
    },
    {
        "description": "Mobile data recharge",
        "amount": 10.00,
        "category": "Utilities",
        "date": "2025-05-05"
    },
    {
        "description": "Book purchase on Amazon",
        "amount": 18.45,
        "category": "Education",
        "date": "2025-05-06"
    }
]
