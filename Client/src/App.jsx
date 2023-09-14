import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './views/Home/Home.jsx';
import AboutMe from './views/AboutMe/AboutMe.jsx';
import './App.module.css'

const App = () => {
  const location = useLocation();


  const navRoutes = ['/about'];

  return (
    <div>
      {navRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default App;
