import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [head, setHead] = useState('');
  const [para, setPara] = useState('');
  const [inFocus, setinFocus] = useState(0)

  function handleHead(event) {
    setHead(event.target.value);
  }

  function handlePara(event) {
    setPara(event.target.value);
  }

  function handleClick() {
    if(head !== '') {
      var note = {
        title: head,
        text: para
      }

      props.clicker(note);
      setHead('');
      setPara('');
    }
  }

  function handleStart() {
    setinFocus(1);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input onClick={handleStart} onChange={handleHead} name="title" placeholder={inFocus === 0? "Take a note...":"Title"} value={head} />
          {inFocus === 1? <textarea onChange={handlePara} name="content" placeholder="Take a note..." rows={inFocus === 1? 3:1} value={para} /> : null}
          <Zoom in={inFocus}>

          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
