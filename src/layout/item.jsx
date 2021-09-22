/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PropsTypes from "prop-types";

const Item = ({ children, flex, align, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};
Item.defaultProps = {
  align: "left",
  padding: "unset"
};
Item.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node
  ]),
  flex: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]),
  align: PropsTypes.oneOf(["center", "left", "right", "justify"]),
  padding: PropsTypes.string
};
export default Item;
