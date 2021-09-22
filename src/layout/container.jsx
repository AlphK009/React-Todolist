/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
// import React from "react";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  height,
  minHeight
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    height: ${height};
    min-height: ${minHeight};
  `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};
Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "stretch",
  justifyContent: "flex-start",
  alignContent: "stretch",
  height: "auto",
  minHeight: "initial"
};
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "start",
    "end",
    "left",
    "right",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "self-start",
    "stretch",
    "baseline",
    "first baseline",
    "last baseline",
    "self-end",
    "start",
    "end"
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "self-start",
    "stretch",
    "baseline",
    "first baseline",
    "last baseline",
    "self-end",
    "start",
    "end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.string
};

export default Container;
