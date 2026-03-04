import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Navbar from "./components/navbar";
import Info from "./components/info";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <About />
      <Navbar />
      <Info />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
