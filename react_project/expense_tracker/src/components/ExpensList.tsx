import { useExpense } from "../context/ExpenseContext";

const ExpenseList = () => {
  const {
    state: { expense },
  } = useExpense();

  return (
    <div className="mx-auto container my-10">
      <ul className="space-y-4">
        <li className="grid grid-cols-4 font-semibold text-gray-600 border-b pb-2">
          <p>Description</p>
          <p>Amount</p>
          <p>Category</p>
          <p>Date</p>
        </li>
        {expense.map((exp) => (
          <li
            key={exp.description}
            className="grid grid-cols-4 bg-white shadow-sm p-4 rounded-lg border border-gray-200 hover:shadow-md transition"
          >
            <p className="text-gray-800">{exp.description}</p>
            <p className="text-green-600 font-medium">
              ${exp.amount.toFixed(2)}
            </p>
            <p className="text-blue-500">{exp.category}</p>
            <p className="text-gray-500">{exp.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
