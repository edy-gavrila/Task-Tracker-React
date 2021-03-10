import "./addtask.css";
import { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState({
    title: "",
    date: "",
    remainder: false,
  });
  return (
    <form className="add-task-form">
      <div className="form-group">
        <label for="add-task">Task</label>
        <input
          type="text"
          id="add-task"
          className="form-control"
          placeholder="Add Task"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        ></input>
      </div>
      <div className="form-group">
        <label for="add-datetime">Date & Time</label>
        <input
          type="text"
          id="add-datetime"
          className="form-control"
          placeholder="Add Date and time"
          value={task.date}
          onChange={(e) => setTask({ ...task, date: e.target.value })}
        ></input>
      </div>

      <div className="form-check mb-2">
        <input
          type="checkbox"
          id="remainder"
          className="form-check-input"
          checked={task.remainder}
          onChange={(e) => setTask({ ...task, remainder: e.target.checked })}
        ></input>
        <label for="remainder" className="form-check-label">
          Set Remainder
        </label>
      </div>
      <input
        type="submit"
        className="btn btn-dark btn-block"
        value="Add Task"
        onClick={(e) => {
          e.preventDefault();
          //perform any input validation here
          props.addTaskHandler(task);
          setTask({ title: "", date: "", remainder: false });
        }}
      ></input>
    </form>
  );
};
export default AddTask;
