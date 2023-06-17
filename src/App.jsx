import React, { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Project />
      <About />
    </div>
  );
}

export default App;
