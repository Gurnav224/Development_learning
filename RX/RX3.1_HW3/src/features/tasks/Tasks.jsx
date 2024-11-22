import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, toggleTaskUpdate } from "./taskSlice";
import { useEffect } from "react";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  },[dispatch])

 console.log('tasks', tasks.tasks)
  return (
    <div>
      {tasks.tasks.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((task) => (
              <li key={task.taskId}>
                <p>{task.task}</p>
                <button onClick={() => dispatch(toggleTaskUpdate(task.taskId))}>{task.taskStatus}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
