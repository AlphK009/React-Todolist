import { css } from "@emotion/react";

export const button = ({ align, color, theme }) => {
  let textColor;

  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }
  return css`
    font-size: 1.8 rem;
    font-family: "Bungee", sans-serif;
    /* width: 24%; */
    color: ${textColor};

    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    text-align: ${align};
  `;
};
