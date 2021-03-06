import { css } from "@emotion/react";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `;
};

export const headerTitle = (theme) => {
  return css`
    /* width: 52%; */
    text-align: center;
    font-size: 3.6rem;
    font-family: "Homemade Apple", sans-serif;
    text-transform: lowercase;
    color: ${theme.color.primary.black};
  `;
};
