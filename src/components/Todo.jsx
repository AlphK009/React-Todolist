import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completeTodo, idx, isComplete }) => {
  return (
    <div
      className="todo"
      onClick={() => {
        completeTodo(idx);
      }}
    >
      <span
        className="todo-text"
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
