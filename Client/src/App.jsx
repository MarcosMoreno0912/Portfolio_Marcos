import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './views/Home/Home.jsx';
import AboutMe from './views/AboutMe/AboutMe.jsx';
import TechSkills from './views/TechSkills/TechSkills.jsx';
import Projects from './views/Projects/Projects.jsx';
import ContactMe from './views/ContactMe/ContactMe.jsx';
import './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();

  const navRoutes = ['/about', '/skills', '/projects', '/contact'];

  return (
    <div>
      {navRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<TechSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App;
