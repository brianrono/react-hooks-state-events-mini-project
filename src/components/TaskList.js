import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
