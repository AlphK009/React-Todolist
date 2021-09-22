/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropsTypes from "prop-types";
//import styles from "./header.module.css";
import Button from "../Button/Button";
import * as style from "./header.styles";
import { useTheme } from "@emotion/react";
import Container from "../../layout/container";
import Item from "../../layout/item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={style.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};
Header.prototype = {
  showAddToggle: PropsTypes.func.isRequired,
  showAdd: PropsTypes.bool.isRequired,
  clearTodos: PropsTypes.func.isRequired
};

export default Header;
