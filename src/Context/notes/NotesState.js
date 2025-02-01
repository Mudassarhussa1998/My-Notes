import React from "react";
import NoteContext from "./NotesContext";

const NotesState = (props) => {

  const notesInitial = [
    {
      "_id": "6799d454713742sdadse9ad6077e3",
      "user": "6798d89b7fde0aasda23284cd669",
      "name": "mudassar asdasdas",
      "description": "hello g",
      "date": "2025-01-29T07:10:12.909Z",
      "__v": 0
    },
    {
      "_id": "679a3735aa22sad0f6168437c2d",
      "user": "6798d89b7fde0a2asda3284cd669",
      "name": "mudassar Hussain",
      "description": "BSCS evening 3-B",
      "date": "2025-01-29T14:12:05.723Z",
      "__v": 0
    },
    {
      "_id": "679a3737aa2220f61asdasd68437c2f",
      "user": "6798d89b7fde0a23284asdcd669",
      "name": "mudassar Hussain",
      "description": "BSCS evening 3-B",
      "date": "2025-01-29T14:12:07.113Z",
      "__v": 0
    }, {
      "_id": "6799d454713742e9adasdd26077e3",
      "user": "6798d89b7fde0a23284asdcd669",
      "name": "mudassar asdasdas",
      "description": "hello g",
      "date": "2025-01-29T07:10:12.909Z",
      "__v": 0
    },
    {
      "_id": "679a3735aa2220f6asdas168237c2d",
      "user": "6798d89b7fde0a2328asd4cd669",
      "name": "mudassar Hussain",
      "description": "BSCS evening 3-B",
      "date": "2025-01-29T14:12:05.723Z",
      "__v": 0
    },
    {
      "_id": "679a37237aasda220f6168437c2f",
      "user": "6798d89b7fde0a23284asdacd669",
      "name": "mudassar Hussain",
      "description": "BSCS evening 3-B",
      "date": "2025-01-29T14:12:07.113Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = React.useState(notesInitial);

  const getNotes = async () => {
    // API call
    console.log("Getting all notes");
  }

  const addNote = async (title, description) => {
    // API call
    console.log("Adding the note");
    const note = {
      "_id": "6799d454713742e9ad26077e3",
      "user": "6798d89b7fde0a3284cd669",
      "name": title,
      "description": description,
      "date": "2025-01-29T07:10:12.909Z",
      "__v": 0
    }
    setnotes(notes.concat(note));
  }

  const deleteNote = async (id) => {
    // API call
    console.log("Deleting the note with id", id);
    const newNOdes = notes.filter((note) => { return note._id !== id });
    setnotes(newNOdes);
  }

  const editNote = async (id, title, description) => {
    // API call

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.name = title;
        element.description = description;
        break;
      }
    }
    console.log("Editing the note with id", id);
  }



  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NotesState;
