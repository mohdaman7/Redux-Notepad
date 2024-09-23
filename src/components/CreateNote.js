import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../features/notesSlice";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, description, color }));
    navigate("/");
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Create Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
           className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
           className="w-full p-2 border rounded"
        />

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="m-5"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
