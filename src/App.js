import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
