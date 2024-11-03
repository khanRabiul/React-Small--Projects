import { useState } from "react";
import Add_Todos from "./Add _Todos";
import Todos from "./Todos";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos,
            newTodo
        ])
    }

    const  updateTodo = (index, updatedValue)=> {
      const updateTodos = todos.map((todo, i) =>
      i === index ? updatedValue : todo
      );
      setTodos(updateTodos)
    }

    const deletTodo = (index) => {
      const updatedTodos = todos.filter((todo, i)=> i !== index)
      setTodos(updatedTodos)
    }

  return (
    <>
    <Add_Todos onTodo={addTodo}/>
     <Todos todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deletTodo}/>
    </>
  );
};

export default Home;