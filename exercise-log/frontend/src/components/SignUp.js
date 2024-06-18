import React, { useState } from "react";
import axios from "axios";
// import "../css/exerciseCard.css";
import SignUpForm from "./SignUpForm";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      userEmail,
      password,
    };
    console.log("user",user);
    try {
      const response = await axios.post(`${BASE_URL}/register`, user);
      console.log("Registration successful", response.data);
      // Redirect to login or another page after successful registration
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
      <div className="sign-up-container">
        <SignUpForm
          onSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          onCancel={""} // Consider implementing and passing an onCancel handler
        />
      </div>
    </div>
  );
};

export default SignUp;

//   const response = await axios.post(
//     `${process.env.REACT_APP_BASE_URL}/register`,
//     {
//       username,
//       password,
//       userEmail,
//     }
//   );
