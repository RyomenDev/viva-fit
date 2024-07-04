// import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserInputForm from "./components/UserInputForm";
import "./App.css";

function App() {
  //   const [count, setCount] = useState(0)

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
      <Header />
      <Navbar />
      <main>
        <section>
          <h2>Welcome to the Meal Planner!</h2>
          <p>Start planning your meals and achieve your dietary goals.</p>
        </section>
        <UserInputForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
