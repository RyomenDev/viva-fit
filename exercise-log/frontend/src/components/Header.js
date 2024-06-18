import "../css/header.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div id="header">
      <div className="header-content">
        <div className="title">
          <h1>Exercise Log</h1>
        </div>
        <div className="buttons">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
              <Link to="/signup">
                <button className="signUp-button">Sign-Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
