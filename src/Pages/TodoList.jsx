import { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [todos, setTodos] = useState([
    { text: "Belajar React!", isComplete: false },
    { text: "Belajar State React!", isComplete: false },
    { text: "Belajar React Hooks!", isComplete: false },
    { text: "Belajar React Components!", isComplete: false },
    { text: "Belajar React Props!", isComplete: false },
    { text: "Belajar React Maping!", isComplete: false }
  ]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isComplete: false }];
      setTodos(addedTodo);
    } else {
      alert("maximum todo 10");
    }
  };

  const completeTodo = (idx) => {
    const addedTodo = [...todos];
    addedTodo[idx].isComplete = !addedTodo[idx].isComplete;

    setTodos(addedTodo);
  };

  const clearTodos = () => setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);
  console.log("todos", todos);
  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};
export default TodoList;
