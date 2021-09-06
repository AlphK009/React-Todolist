import React from "react";
import PropsTypes from "prop-types";
import styles from "./header.module.css";
import Button from "../Button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>To do Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};
Header.prototype = {
  showAddToggle: PropsTypes.func.isRequired,
  showAdd: PropsTypes.bool.isRequired,
  clearTodos: PropsTypes.func.isRequired
};

export default Header;
