import "./header.css";
import Button from "../Button/button";

const header = (props) => {
  return (
    <div className="header-container">
      <h3 className="">Task Tracker</h3>
      <Button
        onClick={props.onBtnClick}
        style={
          props.showAddTask
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
        text={props.showAddTask ? "Close" : "Add"}
      />
    </div>
  );
};

export default header;
