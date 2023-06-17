import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <About />
    </>
  );
}

export default App;
