import "../css/login.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const LoginForm = ({ onLoginSuccess }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        userEmail: userEmail,
        password,
      });
      //   console.log("Login successful", response.data);
      // Save JWT token to local storage
      localStorage.setItem("token", response.data.token);
      login();
      alert("Login successful");
      onLoginSuccess(response.data); // Handle login success (e.g., save token, redirect)
      navigate("/", { state: { message: "Login successfully" } });
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input
            id="userEmail"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
