import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); //to prevent the default behaviour of form
    if (!text.trim() || !deadline) {
      setError("Both task and deadline are required!");
      return;
    } 
    addTask(text, deadline); //call addtask function from app.jsx
    setText(""); //clear the input field after submission
    setDeadline("");
    setError("");
  };
  return (
    <div>
      {/* at time of submission */}
      <form
        className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl shadow-sm"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Add new task..."
          className="flex-[2] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={text} //set new text here
          onChange={(e) => {
            setText(e.target.value);
          }} //update text state on change of input field
        />
        <input
          type="datetime-local"
          className="flex-[1] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Add
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default TaskForm;
