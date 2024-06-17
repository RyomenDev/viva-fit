import "./App.css";
// import ExerciseForm from "./components/CreateExercise";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const handleLoginSuccess = (data) => {
    // Handle login success (e.g., save token, redirect)
    console.log("Logged in successfully!", data);
  };
  return (
    <div>
      {/* <Header />
      <Home />
      <Footer /> */}
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
            <Route path="signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
