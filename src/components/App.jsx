import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
// import notes from "../notes.js";

function App() {
  const [list, updateList] = React.useState([]);

  function addNote(newNote) {
    updateList(prevList => {
      return [...prevList, newNote];
    });
  }

  function deleteNote(id) {
    updateList(prevList => {
      return prevList.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={addNote}/>
      {list.map((note, index) => (
        <Note
          key={index}
          index={index}
          title={note.title}
          content={note.content}
          onClicked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
