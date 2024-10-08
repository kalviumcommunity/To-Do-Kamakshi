import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/List";
import CompletedTasks from "./components/Completed";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteToDo = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const editToDo = (index) => {
    const userInput = prompt(`Update To-Do ${index + 1}`);
    if (userInput !== null && userInput.trim() !== "") {
      setTasks((prevTasks) =>
        prevTasks.map((item, itemIndex) =>
          itemIndex === index ? { ...item, text: userInput } : item
        )
      );
    }
  };

  const toggleToDo = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="app">
      <h1>To-do List</h1>
      <Input
        value={newTask}
        handleInputChange={handleInputChange}
        addToDo={addToDo}
      />
      <ToDoList
        tasks={incompleteTasks}
        deleteMethod={deleteToDo}
        editMethod={editToDo}
        toggleMethod={toggleToDo}
      />
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
};

export default App;