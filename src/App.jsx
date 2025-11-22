import React, { useContext } from 'react';

import styles from './App.module.scss';
import { Routes, Route, useLocation } from 'react-router-dom';

// import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

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
      })}>
      {!isSubProjectPage && <Cursor />}
      {!isSubProjectPage && <Navbar scroll={scrollTriggered} />}
      <LocationProvider>
        <RoutesWithAnimation isSubProjectPage={isSubProjectPage} />
      </LocationProvider>
      {!isSubProjectPage && <Footer />}
    </div>
  );
}

export default App;

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
function RoutesWithAnimation({ isSubProjectPage }) {
  const location = useLocation();

  return (
    <div
      className={clsx(styles.appContent, { [styles.appContentWithoutPadding]: isSubProjectPage })}
      id="appContent">
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<SubProject />} />
      </Routes>
    </div>
  );
}
