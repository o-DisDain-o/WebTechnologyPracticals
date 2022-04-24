import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.tit}</h1>
      <p>{props.text}</p>
      <button onClick={() => {props.delItem(props.id)}}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
