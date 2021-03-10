import "./button.css";

export default function button(props) {
  return (
    <button className="btn-add" onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  );
}
