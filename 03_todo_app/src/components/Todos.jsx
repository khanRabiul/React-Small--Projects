import Todo from "./Todo";

const Todos = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    
    <>
      {todos.length > 0
        ? todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onDelete= {() =>onDeleteTodo(index)}
              // passing props to Todo.jsx named "onUpdate". Inside the props called a function "updatedValue" it sets the onUpdateTodo with the value of new todo's index and the value
              // In Todos, you are passing onUpdateTodo down to each Todo as a prop called onUpdate.
              onUpdate={(updatedValue) => onUpdateTodo(index, updatedValue)}
             // Here updatedValue is an arrow function that receives a parameter ("updatedValue") invoked when user click on save button. The function holds the value of index and updated value. It also update the value of "onUpdateTodo" with "index, updatedValue."
            />
          ))
        : "Add new todo"}
    </>
  );
};

export default Todos;
