import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, idx) => {
        return <Todo key={idx} text={todo.text} />;
      })}
    </section>
  );
};
Todos.propsTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};
export default Todos;
