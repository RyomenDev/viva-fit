import "../css/header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <h1>Exercise Log</h1>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
      <Link to="/signup">
        <button className="signUp-button">Sign-Up</button>
      </Link>
    </div>
  );
};

export default Header;
