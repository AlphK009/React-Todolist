/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import React from "react";
import Todo from "../Todo/Todo";
import PropTypes from "prop-types";

// import style from "./todos.module.css";
import * as styles from "./todos.styles";
import Container from "../../layout/container";
import Item from "../../layout/item";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <div css={styles.todoPlaceholderText}>
            Added todo by clicking{" "}
            <span css={styles.addButtonPlaceholderText}>Add</span>
            button on the top left corner
          </div>
        )}
      </Container>
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
