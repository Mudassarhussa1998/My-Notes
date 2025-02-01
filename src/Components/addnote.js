import React, { useContext, useState } from "react";
import NotesContext from "../Context/notes/NotesContext";

export default function AddNote() { // ✅ Component name starts with uppercase
    const context = useContext(NotesContext); // ✅ Use lowercase for variable names
    const { addNote } = context;

    const [note, setNote] = useState({ name: "", description: "" });

    const onChange = (e) => {
        setNote({ ...note, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ Prevent form from refreshing the page
        addNote(note.name, note.description); // ✅ Call addNote function from context
        console.log("Adding note", note);
    };

    return (
        <div className="bg-white p-10 rounded-lg w-full max-w-lg">
            <h2 className="text-3xl font-semibold text-start mb-6">Add Note</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={note.name}
                        onChange={onChange}
                        className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={note.description}
                        onChange={onChange}
                        className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}
