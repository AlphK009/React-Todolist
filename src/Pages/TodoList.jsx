import { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React!" },
    { text: "Belajar State React!" },
    { text: "Belajar React Hooks!" },
    { text: "Belajar React Components!" },
    { text: "Belajar React Props!" },
    { text: "Belajar React Maping!" },
    { text: "Belajar React Filter!" },
    { text: "Belajar React Params!" },
    { text: "Belajar React Typescript!" },
    { text: "Belajar React Router!" }
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;
