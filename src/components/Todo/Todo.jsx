import React from "react";
import PropTypes from "prop-types";
import style from "./todo.module.css";

const Todo = ({ text, completeTodo, idx, isComplete }) => {
  return (
    <div
      className={style.todo}
      onClick={() => {
        completeTodo(idx);
      }}
    >
      <span
        className={style.todoText}
        style={{ textDecoration: isComplete ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired
};
export default Todo;
