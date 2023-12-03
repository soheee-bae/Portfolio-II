import React, { useContext, useEffect } from 'react';

import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

const pages = [
  { path: '/', name: 'home', order: 1 },
  { path: '/project', name: 'project', order: 2 },
  { path: '/about', name: 'about', order: 3 },
  { path: '/contact', name: 'contact', order: 4 }
];

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
      <TransitionGroup className={`transition-group ${this.state.pageDirection}`}>
        <CSSTransition
          key={currentKey}
          timeout={{ enter: 800, exit: 400 }}
          classNames={'transition-wrap'}>
          <Switch location={location}>
            <Route exact path="/" component={() => <Home scroll={scrollTriggered} />} />
            <Route path="/project" component={() => <Project />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/contact" component={() => <Contact />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
{
  /* <VerticalDotNav setNavSection={setNavSection} navSection={navSection} /> */
}
