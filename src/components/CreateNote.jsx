import "../css/create.css"

import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };
  return (
    <div className="form-container">
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a Note"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateNote;
