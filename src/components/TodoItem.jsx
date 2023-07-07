export default function TodoItem(props) {
    return (
      <li>
        <span>V{props.complete}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }