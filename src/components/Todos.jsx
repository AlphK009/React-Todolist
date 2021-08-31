import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
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
        <div className="todo-placeholder-text">
          Added todo by clicking{" "}
          <span className="add-button-placeholder-text">Add</span>
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
