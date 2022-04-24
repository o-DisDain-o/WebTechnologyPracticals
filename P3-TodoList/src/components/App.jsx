import React from "react";
import { MdDelete } from "react-icons/md";
import ToDoItem from "./ToDoItem";

function App() {
  const [itemArr, addItemArr] = React.useState([]);
  const [item, setItem] = React.useState("");

  function handleItem(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    addItemArr((prevVal) => {
      return [...prevVal, item];
    });
    setItem("");
  }

  // function delItem(id) {
  //   addItemArr((prevVal) => {
  //     return prevVal.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  function clearAll() {
    addItemArr([]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArr.map((x) => (
            <ToDoItem text={x}/>
          ))}
        </ul>
      </div>
      <div className="delButton">
        <button  onClick={clearAll}>
          <span>
            <MdDelete />
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
