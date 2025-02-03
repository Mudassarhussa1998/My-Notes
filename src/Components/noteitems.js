import React, { useState, useContext } from 'react';
import NotesContext from "../Context/notes/NotesContext";

export default function NoteItem({ note, index }) {
  const context = useContext(NotesContext);
  const { deleteNote, editNote } = context;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedNote, setEditedNote] = useState({ name: note.name, description: note.description });

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditedNote({ name: note.name, description: note.description }); // Reset edited note state
  };
  

  const handleSave = () => {
    console.log("Saving note:", editedNote , note._id);
    editNote(note._id, editedNote.name, editedNote.description); // Use edited data here
    setIsModalOpen(false);
  };
  

  return (
    <div key={note.id} className="p-4 border-b">
      <div className='flex gap-4'>
        <h3 className="text-lg font-semibold text-black">{index + 1}</h3>
        <h3 className="text-lg font-semibold">{note.name}</h3>
      </div>
      <p className="text-gray-500">{note.description}</p>
      <div className="flex gap-4 mt-4">
        <button className="text-red-500" onClick={() => deleteNote(note._id)}>Delete</button>
        <button className="text-blue-500" onClick={handleEditClick}>Edit</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
            <input 
              type="text" 
              className="w-full p-2 border rounded mb-4" 
              value={editedNote.name} 
              onChange={(e) => setEditedNote({ ...editedNote, name: e.target.value })} 
              placeholder="Note Name" 
            />
            <textarea 
              className="w-full p-2 border rounded mb-4" 
              value={editedNote.description} 
              onChange={(e) => setEditedNote({ ...editedNote, description: e.target.value })} 
              placeholder="Note Description" 
            ></textarea>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={handleCloseModal}>Cancel</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}