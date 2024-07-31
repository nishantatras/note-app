import React from "react";
import { MdDarkMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notify</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        <MdDarkMode />{" "}
      </button>
    </div>
  );
};

export default Header;
