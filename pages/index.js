import React from 'react';
// import './App.css';

// import Navbar from './components/Navbar';

// import Home from './pages';
// import About from './pages/About.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Link from 'next/link';

function Home() {
  return (
      <>
        <div className="App">
          {/* <Navbar /> */}
          <Link href="/"><a>Home</a></Link>
          {/* <Link href='/about' element={<About/>}/> */}
        </div>
      </>
  );
}

export default Home;
