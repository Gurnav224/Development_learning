import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.taskList);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((task) => (
              <li key={task.taskId}>
                <p>{task.title}</p>
                <p>Status: {task.status}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
