import React from 'react';
import Navigation from './components/NavComponents';
import Main from './components/MainComponents';
import About from './components/AboutComponents';
import Skills from './components/SkillsComponents';
import Experience from './components/ExperienceComponents';
import Projects from './components/ProjectsComponents';
import Contact from './components/ContactComponents';
import Footer from './components/FooterComponents';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;

/* Things to work on */
/* 1. Host website on Github */
/* 2. Add links to 'designed', 'coded', and project links */
/* 3. Adjust 'About Me' section and alignment with larger displays */
/* 4. Get rid of builder API images and replace with images in directory */