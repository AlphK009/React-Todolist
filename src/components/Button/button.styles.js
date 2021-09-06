import { css } from "@emotion/react";

export const button = ({ align, color }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }
  return css`
    font-size: 1.8 rem;
    font-family: "Bungee", sans-serif;
    width: 24%;
    color: ${textColor};

    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    text-align: ${align};
  `;
};
