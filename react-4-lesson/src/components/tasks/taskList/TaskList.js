import React from "react";
const TaskListItem = ({ task, removeTask }) => {
  const removeItem = () => removeTask(task.id);
  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button type="button" id={task.id} onClick={removeItem}>
        DELETE
      </button>
    </li>
  );
};

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;
