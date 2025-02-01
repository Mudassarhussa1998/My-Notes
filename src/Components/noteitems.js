import React, { useContext } from 'react';
import NotesContext from "../Context/notes/NotesContext";

export default function NoteItems({ note, index }) {
  const context = useContext(NotesContext); // ✅ Use lowercase for variable names
  const { deleteNote } = context;

  return (
    <div key={note.id} className=" p-4 border-b">
      <div className='flex gap-4'>
        <h3 className="text-lg font-semibold text-black">{index + 1}</h3>
        <h3 className="text-lg font-semibold">{note.name}</h3>
      </div>
      <p className="text-gray-500">{note.description}</p>
      <div className="flex gap-4 mt-4">
        <button className="text-red-500" onClick={() => {
          deleteNote(note._id);
        }}>Delete</button>
        <button className="text-blue-500">Edit</button>
      </div>
    </div>
  );
}
