import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/partial/Navbar';
import Blog from './Component/Blog';
import Services from './Component/Services';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';

function App() {
  return (
        <>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/services' element={<Services />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/contact' element={<Contact />}/>
              </Routes>
          </BrowserRouter>
        </>
  );
}

export default App;
