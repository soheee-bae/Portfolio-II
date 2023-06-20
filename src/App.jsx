import React from 'react';

import styles from './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import { useScroll } from './hooks/useScroll';
import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import { useNav } from './hooks/useNav';

function App() {
  const { scrollTriggered } = useScroll();
  const { navSection, setNavSection } = useNav();

  return (
    <div className={styles.app}>
      <Navbar scroll={scrollTriggered} setNavSection={setNavSection} navSection={navSection} />
      <VerticalDotNav setNavSection={setNavSection} navSection={navSection} />
      <Home scroll={scrollTriggered} />
      <Project />
      <About />
    </div>
  );
}

export default App;
