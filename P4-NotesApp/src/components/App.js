import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {
  const [notesArr, addInArr] = React.useState([]);

  function updateArr(newnote) {
    addInArr(prevValue => {
      return [...prevValue, newnote];
    })
    console.log(notesArr);
  }

  function deleteNote(id) {
    addInArr(prevItems => {
      return notesArr.filter((note, index) =>
        {return index !== id;}
      );
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        clicker={updateArr}
      />

      {notesArr.map((note, index) =>
          <Note
            key={index}
            id={index}
            tit={note.title}
            text={note.text}
            delItem={deleteNote}
          />
      )}
      <Footer />
    </div>
  );
}

export default App;
