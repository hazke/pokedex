import React from 'react';   //uses React


import { HashRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
//utilizes react router

import './App.css';
import Home from './Components/Home';
import About from './Components/About';


export default function App() {  // contains multiple pages : Home and About
  return (
    <div className="App">
      <div className="header-container">
        <h1><font color="yellow"> <img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" alt="Pokemon" className="logo-image" /> POKEDEX </font></h1>         
        <Router>
          <div className="link-container">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </div>

          <Routes>
            <Route path="/" element={<Layout />}>

              <Route path="home" index element={<Home />} />
              <Route path="about" element={<About />} />

            </Route>
          </Routes>

        </Router>
      </div>


    </div>

  );
}


function Layout() {  //the markup across all pages
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
      <nav>

      </nav>


      <Outlet />
    </div>
  );
}
