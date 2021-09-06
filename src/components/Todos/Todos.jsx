import React from "react";
import Todo from "../Todo/Todo";
import PropTypes from "prop-types";

import style from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={style.todos}>
      {todos.length > 0 &&
        todos.map((todo, idx) => {
          return (
            <Todo
              key={idx}
              text={todo.text}
              isComplete={todo.isComplete}
              completeTodo={completeTodo}
              idx={idx}
            />
          );
        })}
      {todos.length === 0 && (
        <div className={style.todoPlaceholderText}>
          Added todo by clicking{" "}
          <span className={style.addButtonPlaceholderText}>Add</span>
          button on the top left corner
        </div>
      )}
    </section>
  );
};
Todos.propsTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};
export default Todos;
