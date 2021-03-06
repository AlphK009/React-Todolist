import { css } from "@emotion/react";

// export const add = () =>
//   css`
//     padding: 16px;
//   `;

// export const addForm = () =>
//   css`
//     display: flex;
//     align-items: flex-start;
//   `;
export const addSearch = ({ theme }) =>
  css`
    padding: 0 64px;
    background: unset;
    border: unset;
    /* flex: 1; */
    width: 100%;
    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;

// export const addBtn = ({ theme }) =>
//   css`
//     font-size: 1.8rem;
//     font-family: "Bungee", sans-serif;

//     padding: 8px 16px;
//     padding-right: unset;
//     cursor: pointer;

//     background: unset;
//     border: unset;
//     outline: unset;
//     &:active {
//       text-shadow: 1px 3px 2px ${theme.color.primary.black};
//     }
//   `;
