import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
          <Intro/>
          <About/>
          <Projects/>
          <Skills/>  
          <Contact/>
      </div>
    </div>
  );
}

export default App;
