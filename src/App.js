import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

import { motion as m } from 'framer-motion';
import Contact from './components/Contact/Contact';

import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
