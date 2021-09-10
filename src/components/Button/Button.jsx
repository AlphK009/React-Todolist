/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";
import * as styles from "./button.styles";
import { useTheme } from "@emotion/react";

// import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //  "header-btn",
  //  color === "black" && "main-black-color",
  //  color === "red" && 'main-red-color',
  //  align === "left" && "align-left",
  //  align === "right" && "align-right"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });
  const theme = useTheme();
  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    <button css={styles.button({ align, color, theme})} onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
//atomic component komponen terkecil yang dapat digunakan manapun tanpa mengganggu komponen lain
