import React, { useState } from "react";
import { useExpense } from "../context/ExpenseContext"; // adjust path as needed

const AddExpenseForm: React.FC = () => {
  const { dispatch } = useExpense();

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.description || !formData.amount || !formData.category || !formData.date) return;

    dispatch({
      type: "ADD",
      payload: {
        description: formData.description,
        amount: parseFloat(formData.amount),
        category: formData.category,
        date: formData.date,
      },
    });

    setFormData({ description: "", amount: "", category: "", date: "" });
  };

  console.log(formData)

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto my-10">
      <h2 className="text-xl font-bold text-gray-700 ">Add New Expense</h2>

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <button
        type="submit"
        className="w-full bg-blue-300 text-white py-2 rounded-md hover:bg-blue-400 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
