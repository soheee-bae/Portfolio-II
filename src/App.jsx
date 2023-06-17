import React from 'react';

import styles from './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <Project />
      <About />
    </div>
  );
}

export default App;
