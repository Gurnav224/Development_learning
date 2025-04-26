import  { useState } from "react";
import { Header } from "./components/Header";
import TodoItem from "./components/Todo";
import { todos as initialTodos } from "./todo";


interface Todo{
  id:number,
  text:string,
  completed:boolean
}



function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);


  const handleToggle = (
    e: React.ChangeEvent<HTMLInputElement>,
    todoId: number
  ): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: e.target.checked } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <Header title="Todo Application" />
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <ul className="space-y-4">
          {todos.map((todo) => (
            <TodoItem todo={todo} onToggle={handleToggle} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
