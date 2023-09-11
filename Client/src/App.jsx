import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import './App.module.css'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
