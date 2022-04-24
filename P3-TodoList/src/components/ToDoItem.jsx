import React from "react";

function ToDoItem(props) {
  const [done, setDone] = React.useState(0);

  function taskDone() {
    if(done === 1)
      setDone(0);
    else if(done === 0)
      setDone(1);
  }

  return (
  <li onClick={taskDone} style={{textDecoration: done ? "line-through":null}} >{props.text}</li>
  );

  // return (
  //   <li
  //     onClick={() => {
  //       props.onChecked(props.id);
  //     }}
  //   >
  //     {props.text}
  //   </li>
  // );
}

export default ToDoItem;
