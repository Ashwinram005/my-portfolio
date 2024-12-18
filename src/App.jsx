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
        <Navbar />
        <div id="hero" className="">
          <Hero />
        </div>
        <div id="about" className="">
          <About />
        </div>
        <div id="projects" className="">
          <Projects />
        </div>
        <div id="skills" className="">
          <Skills />
        </div>
        <div id="resume" className="">
          <Resume />
        </div>
        <div id="contact" className="">
          <Contact />
        </div>
    </div>
  );
};

export default App;
