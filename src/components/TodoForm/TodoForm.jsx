import React, { useState } from "react";
import PropsTypes from "prop-types";

import style from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo");
      return;
    }
    if (value.length > 40) {
      alert("please create shorter todo text");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className={style.add}>
        <form className={style.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={style.addSearch}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={style.addBtn}>ADD</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropsTypes.func.isRequired,
  showAdd: PropsTypes.bool.isRequired
};

export default TodoForm;
