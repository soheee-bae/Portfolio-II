import React, { useContext } from 'react';

import styles from './App.module.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import VerticalDotNav from './components/VerticalDotNav/VerticalDotNav';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

// import About from './pages/About/About';
import Home from './pages/Home/Home';
// import Contact from './pages/Contact/Contact';
// import Project from './pages/Project/Project';

import { useScroll } from './hooks/useScroll';
import Footer from './components/Footer/Footer';
import CursorContext from './context/cursorContext';
import clsx from 'clsx';

function App() {
  const { scrollTriggered } = useScroll();
  const { cursorVariant } = useContext(CursorContext);

  return (
    <div
      className={clsx(styles.app, { [styles.cursorApp]: cursorVariant === 'noEffect' })}
      id="app">
      <BrowserRouter>
        <Cursor />
        <Navbar scroll={scrollTriggered} />
        <Routes>
          <Route exact path="/" element={<Home scroll={scrollTriggered} />} />
          {/* <Route path="/project" component={<Project />} />
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  /* <VerticalDotNav setNavSection={setNavSection} navSection={navSection} /> */
}
