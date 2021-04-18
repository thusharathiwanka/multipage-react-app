import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
