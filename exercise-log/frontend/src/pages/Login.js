// pages/Login.js
import React from "react";
import LoginForm from "../components/Login";

const Login = ({ onLoginSuccess }) => {
  return (
    <div className="login-page">
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  );
};

export default Login;
