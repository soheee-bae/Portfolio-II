import React from 'react';

import styles from './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import { useScroll } from './hooks/useScroll';

function App() {
  const { scrollTriggered } = useScroll();

  return (
    <div className={styles.app}>
      <Navbar scroll={scrollTriggered} />
      <Home scroll={scrollTriggered} />
      <Project />
      <About />
    </div>
  );
}

export default App;
