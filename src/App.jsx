import React, { useContext } from 'react';

import styles from './App.module.scss';
import { Route, Routes, useLocation } from 'react-router-dom';

// import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';

import { useScroll } from './hooks/useScroll';
import Footer from './components/Footer/Footer';
import CursorContext from './context/cursorContext';
import clsx from 'clsx';
import SubProject from './pages/Project/SubProject';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { scrollTriggered } = useScroll();
  const { cursorVariant } = useContext(CursorContext);
  const { pathname } = useLocation();

  const isSubProjectPage = pathname.includes('/project/');

  return (
    <div
      className={clsx(styles.app, {
        [styles.cursorApp]: cursorVariant === 'noEffect'
      })}
      id="app"
    >
      {!isSubProjectPage && <Cursor />}
      {!isSubProjectPage && <Navbar scroll={scrollTriggered} />}
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
      {!isSubProjectPage && <Footer />}
    </div>
  );
}

export default App;
{
  /* <VerticalDotNav setNavSection={setNavSection} navSection={navSection} /> */
}

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project/:projectId" element={<SubProject />} />
    </Routes>
  );
}
