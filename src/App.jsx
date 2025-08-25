import { useEffect, useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes")
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    if (!note.title || !note.content) {
      alert("Both Title and Content are required");
      return;
    }
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((_, index) => index !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
