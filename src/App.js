import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import Home from './pages';
import About from './pages/About.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
