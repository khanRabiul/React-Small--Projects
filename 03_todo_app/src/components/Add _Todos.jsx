import { useState } from "react";

const Add_Todos = ({ onTodo }) => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(''); // State to manage error messages

  const handleInput = (e) => {
    setTodo(e.target.value);
    setError(''); // Clear the error message when the user starts typing
  };

  const handleAddBtn = () => {
    // Check if the input is empty
    if (todo.trim() === '') {
      setError("Todo cannot be empty"); // Set the error message
      return; // Prevent adding an empty todo
    }

    // Pass the todo to the parent component
    onTodo(todo);
    setTodo(''); // Clear the input after adding the todo
  };

  return (
    <div>
      <input 
        type="text" 
        className="border-2 border-gray-800 rounded-md mr-4"
        value={todo}
        onChange={handleInput}
      />
      <button 
        className="bg-gray-600 text-white px-2 py-1 rounded-md"
        onClick={handleAddBtn}
      >
        Add Todo
      </button>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
    </div>
  );
};

export default Add_Todos;
