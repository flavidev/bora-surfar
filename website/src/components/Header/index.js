import React from "react";

import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/go-back.png";
import logoImage from "../../assets/images/logo.svg";

import "./styles.css";

const Header = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="go back" />
        </Link>
        <img src={logoImage} alt="logo bora surfar" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
      </div>
    </header>
  );
};

export default Header;
