/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropsTypes from "prop-types";
//import styles from "./header.module.css";
import Button from "../Button/Button";
import * as style from "./header.styles";
import {useTheme} from "@emotion/react";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  
  return (
    <section css={style.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={style.headerTitle(theme)}>Todo Lists</h1>
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
