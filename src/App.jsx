import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        {/* Sections with corresponding IDs */}
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
