import React, { useState, useEffect } from "react";
import NoteContext from "./NotesContext";

const NotesState = ({ children }) => {
  const host = process.env.REACT_APP_API_URL || "http://localhost:4000"; // Using env variable for API URL
  const [notes, setNotes] = useState([]);

  // Fetch notes on component mount
  useEffect(() => {
    getNotes();
  });

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZTc3YzAxOTYyODkyMjU4Zjc5Yzc4In0sImlhdCI6MTczODQzODU5Mn0.a1GKEFO8rot3RKCtS44DPkarVQcakCQumOm6RXd1-t4", // Authentication token
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.status}`);
      }

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const addNote = async (name, description) => {
    try {
      const response = await fetch(`${host}/api/notes/adddata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZTc3YzAxOTYyODkyMjU4Zjc5Yzc4In0sImlhdCI6MTczODQzODU5Mn0.a1GKEFO8rot3RKCtS44DPkarVQcakCQumOm6RXd1-t4", // Authentication token
        },
        body: JSON.stringify({ name, description }), // Sending correct data format
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add note");
      }

      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, data]); // Safe state update
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZTc3YzAxOTYyODkyMjU4Zjc5Yzc4In0sImlhdCI6MTczODQzODU5Mn0.a1GKEFO8rot3RKCtS44DPkarVQcakCQumOm6RXd1-t4", // Authentication token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id)); // Safe state update
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZTc3YzAxOTYyODkyMjU4Zjc5Yzc4In0sImlhdCI6MTczODQzODU5Mn0.a1GKEFO8rot3RKCtS44DPkarVQcakCQumOm6RXd1-t4", // Authentication token
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      //const updatedNote = await response.json();
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description } : note
        )
      ); // Safe state update
    } catch (error) {
      console.error("Error editing note:", error.message);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NotesState;
