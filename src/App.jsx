import React, { useContext, useEffect } from 'react';

import styles from './App.module.scss';

// import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';

import { useScroll } from './hooks/useScroll';
import { useNav } from './hooks/useNav';
import Footer from './components/Footer/Footer';
import CursorContext from './context/cursorContext';
import clsx from 'clsx';

function App() {
  const { scrollTriggered, currentPosition } = useScroll();
  const { navSection, setNavSection } = useNav();
  const { cursorVariant } = useContext(CursorContext);

  useEffect(() => {
    setNavSection(currentPosition);
  }, [currentPosition]);

  return (
    <div
      className={clsx(styles.app, { [styles.cursorApp]: cursorVariant === 'noEffect' })}
      id="app">
      <Cursor />
      <Navbar scroll={scrollTriggered} setNavSection={setNavSection} navSection={navSection} />
      {/* <VerticalDotNav setNavSection={setNavSection} navSection={navSection} /> */}
      <Home scroll={scrollTriggered} />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
