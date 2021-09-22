/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropsTypes from "prop-types";
import { useTheme } from "@emotion/react";
// import style from "./todoform.module.css";
import Button from "../Button/Button";
import * as styles from "./todoform.styles";
import Container from "../../layout/container";
import Item from "../../layout/item";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();
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
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addSearch({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              {/* <button css={styles.addBtn({ theme })}>ADD</button> */}
              <Button text="Add" />
            </Item>
          </Container>
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
