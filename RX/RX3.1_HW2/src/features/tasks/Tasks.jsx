import { useDispatch, useSelector } from "react-redux";
import { toggleTaskUpdate } from "./taskSlice";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((task) => (
              <li key={task.taskId}>
                <p>{task.title}</p>
                <button onClick={() => dispatch(toggleTaskUpdate(task.taskId))}>{task.status}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
