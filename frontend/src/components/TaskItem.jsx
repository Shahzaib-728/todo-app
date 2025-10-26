import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Edit, Trash2 } from "lucide-react";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Derived states for better readability
  const isOverdue = task.deadline && new Date(task.deadline) < new Date();
  const isCompleted = task.completed;

  return (
    <li className="flex items-center justify-between p-2 bg-blue-200 rounded-xl shadow-sm">
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* Editable or static text */}
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <div
            className={`flex flex-col cursor-pointer px-2 ${
              isCompleted ? "line-through text-gray-400" : ""
            }`}
            onClick={() => toggleTask(task._id)}
          >
            {/* Task text */}
            <span className="font-span">{task.text}</span>

            {/* ✅ Combined status info */}
            {task.deadline && (
              <span
                className={`text-xs ${
                  isCompleted
                    ? "text-gray-400"
                    : isOverdue
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {isCompleted
                  ? `✅ Completed ${
                      task.completedAt
                        ? `on ${new Date(task.completedAt).toLocaleDateString()}`
                        : ""
                    }`
                  : isOverdue
                  ? `⚠️ Overdue (was due ${new Date(
                      task.deadline
                    ).toLocaleDateString()})`
                  : `🕒 Due by ${new Date(
                      task.deadline
                    ).toLocaleDateString()}`}
              </span>
            )}
          </div>
        )}
      </div>

      {/* RIGHT SIDE: Buttons */}
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 m-2"
            onClick={() => {
              updateTask(task._id, editText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="text-blue-600 hover:text-blue-800 "
            onClick={() => setIsEditing(true)}
          >
             <Edit size={18} />
          </button>
        )}
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTask(task._id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
