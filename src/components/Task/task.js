import "./task.css";

const task = (props) => {
  return (
    <div
      className="task"
      style={
        props.task.remainder
          ? { borderLeft: "3px solid green" }
          : { border: "none" }
      }
      onDoubleClick={() => props.toggleRemainder(props.task.id)}
    >
      <h6>{props.task.title}</h6>
      <p>{props.task.date}</p>
      <i
        className="fas fa-times cross"
        onClick={() => props.deleteTask(props.task.id)}
      ></i>
    </div>
  );
};

export default task;
