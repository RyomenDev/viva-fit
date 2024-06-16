import "./App.css";
import ExerciseForm from "./components/CreateExercise";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <ExerciseForm />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
