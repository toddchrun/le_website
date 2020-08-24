import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [newNote, updateNewNote] = React.useState({
    content: "",
    title: ""
  });
  const [typeActive, setTypeActive] = React.useState(false);

  function handleChange(event) {
    const {value, name} = event.target;

    updateNewNote(prevEvent => {
      if (name === "title") {
        return {content: prevEvent.note, title: value};
      } else {
        return {content: value, title: prevEvent.title};
      }
    });
  }

  function handleClick(event) {
    props.onClicked(newNote);
    event.preventDefault();
    updateNewNote({
      content: "",
      title: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          hidden={!typeActive}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onClick={() => {
            setTypeActive(!typeActive);
          }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={typeActive ? "3" : "1"}
          value={newNote.content}
        />
        <Zoom in={typeActive}>
          <Fab onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
