import React from "react";

interface TodoProps {
  todo:{
    id: number;
  text: string;
  completed: boolean;
  };
  onToggle:(e: React.ChangeEvent<HTMLInputElement>, todoId: number) => void;
}

// Updated TodoItem component to use Tailwind CSS classes
const TodoItem: React.FC<TodoProps> = ({ todo, onToggle }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-4 rounded shadow">
      <div className="flex items-center space-x-3">
        <input
          onChange={(e) => onToggle(e, todo.id)}
          type="checkbox"
          checked={todo.completed}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={todo.completed ? "line-through text-gray-500" : "text-gray-800"}>
          {todo.text}
        </span>
      </div>
      {todo.completed && <span className="text-green-500 font-semibold">Done</span>}
    </li>
  );
};

export default TodoItem;
