import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Suspense fallback={<div className="pt-32 text-center">Carregando...</div>}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
