import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
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
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};
export default Todos;
