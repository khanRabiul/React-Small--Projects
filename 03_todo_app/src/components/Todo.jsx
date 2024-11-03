import { useState } from "react";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveClick = () => {
    onUpdate(editValue); // Use the onUpdate prop to pass the updated value up
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 mb-4">
      <input type="checkbox" 
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleInputChange}
          className="border-2 border-gray-800 rounded-md"
        />
      ) : (
        <p>{todo}</p>
      )}

      {isEditing ? (
        <button
          className="border-2 border-gray-800 rounded-md"
          onClick={handleSaveClick}
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEditClick}
          className="border-2 bg-gray-800 text-white rounded-md"
        >
          Edit
        </button>
      )}

      <button
      onClick={onDelete}
      className="bg-red-600 text-white px-2 py-1 rounded-md">
        Delete
      </button>
    </div>
  );
};

export default Todo;
