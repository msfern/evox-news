import React from "react";
import SearchBar from "../SearchBar/index";

import logo from "../../assets/evox-logo.svg";
import "./style.scss";

function Header({ handleSearch }) {
  return (
    <header className="header">
      <div className="title-container">
        <img src={logo} alt="Logo" />
        <h1>
          <span>evox</span> News
        </h1>
      </div>
      <SearchBar handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
