import React from "react";
import PropsTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">To do Lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};
Header.prototype = {
  showAddToggle: PropsTypes.func.isRequired,
  showAdd: PropsTypes.bool.isRequired
};

export default Header;
