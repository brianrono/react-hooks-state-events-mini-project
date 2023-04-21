import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskText, taskCategory);
    setTaskText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Task text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.map((category) => (
          category !== "All" && (
            <option key={category} value={category}>
              {category}
            </option>
          )
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
