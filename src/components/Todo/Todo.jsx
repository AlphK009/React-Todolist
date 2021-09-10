/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
// import style from "./todo.module.css";
import * as styles from "./todo.styles";

const Todo = ({ text, completeTodo, idx, isComplete }) => {
  const theme = useTheme();
  return (
    <div
      css={styles.todo({ theme })}
      onClick={() => {
        completeTodo(idx);
      }}
    >
      <span css={styles.todoText({ theme, isComplete })}>{text}</span>
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
