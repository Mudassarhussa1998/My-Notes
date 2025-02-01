import React, { useContext } from "react";
import NotesContext from "../Context/notes/NotesContext";
import Noteitems from "./noteitems";
import Addnote from "./addnote";

export default function Notes() {
  const Context = useContext(NotesContext);
  const { notes } = Context;
  return (
    <>
      <Addnote />
      <div className=" grid grid-cols-3 gap-4 w-full">
        {notes.map((note, index) => (
          <Noteitems key={note.id || index} note={note} index={index} />

        ))}
      </div>
    </>

  )
}
