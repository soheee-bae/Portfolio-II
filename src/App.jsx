import React from 'react';

import styles from './App.module.scss';

// import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

// import About from './pages/About/About';
import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';

import { useScroll } from './hooks/useScroll';
import { useNav } from './hooks/useNav';

function App() {
  const { scrollTriggered } = useScroll();

  const { navSection, setNavSection } = useNav();

  return (
    <div className={styles.app}>
      <Cursor />
      <Navbar scroll={scrollTriggered} setNavSection={setNavSection} navSection={navSection} />
      {/* <VerticalDotNav setNavSection={setNavSection} navSection={navSection} /> */}
      <Home scroll={scrollTriggered} />
      <Project />
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
