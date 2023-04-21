import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (taskText, taskCategory) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      category: taskCategory
    };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
