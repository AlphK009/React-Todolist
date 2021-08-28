import React, { useState } from "react";
import PropsTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo");
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">ADD</button>
      </form>
    </section>
  );
};
TodoForm.propTypes = {
  addTodo: PropsTypes.func.isRequired
};

export default TodoForm;
