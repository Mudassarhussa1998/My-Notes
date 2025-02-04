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
     
      <div className="px-[50px] grid grid-cols-3 gap-4 w-full">
        {notes.length === 0 && "No notes to display"}
        {notes.map((note, index) => (
          <Noteitems key={note.id || index} note={note} index={index} />

        ))}
      </div>
    </>

  )
}
