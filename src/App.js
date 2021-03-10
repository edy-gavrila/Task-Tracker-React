import "./App.css";
import Header from "./components/Header/header";
import Tasks from "./components/Tasks/tasks";
import Footer from "./components/Footer/footer";
import AddTask from "./components/AddTask/addtask";

import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  //Delete a task
  const deleteTaskHandler = (id) => {
    const deletedTasks = tasks.filter((task) => task.id !== id);
    setTasks(deletedTasks);
    saveTasks(deletedTasks);
  };

  //Show Add task form
  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  //Toggle remainder
  const toggleRemainder = (id) => {
    const modifiedTasks = tasks.map((task) => {
      if (id !== task.id) {
        return task;
      } else {
        return { ...task, remainder: !task.remainder };
      }
    });
    setTasks(modifiedTasks);
    saveTasks(modifiedTasks);
  };

  //Adds a task
  const addTaskHandler = (task) => {
    const id = Math.floor(Math.random() * 10000);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    saveTasks([...tasks, newTask]);
  };

  //Load tasks from local storage
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("task-app-tasks"));
    if (tasks) {
      return tasks;
    } else return [];
  };

  //Save tasls to local storage
  const saveTasks = (tasks) => {
    localStorage.setItem("task-app-tasks", JSON.stringify(tasks));
  };
  return (
    <div className="App-container">
      <Header onBtnClick={showAddTaskForm} showAddTask={showAddTask} />

      {showAddTask ? <AddTask addTaskHandler={addTaskHandler} /> : null}

      <Tasks
        tasks={tasks}
        deleteTask={deleteTaskHandler}
        toggleRemainder={toggleRemainder}
        showAddTask={showAddTask}
      />
      <Footer />
    </div>
  );
}

export default App;
