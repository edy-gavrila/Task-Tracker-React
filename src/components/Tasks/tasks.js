import "./tasks.css";
import Task from "../Task/task";

const tasks = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      toggleRemainder={props.toggleRemainder}
    />
  ));

  return (
    <div
      className="tasks"
      style={
        props.showAddTask ? { maxHeight: "220px" } : { maxHeight: "465px" }
      }
    >
      {tasks}
    </div>
  );
};

export default tasks;
