import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button1 from './Button1'

function Navbar() {
  const [active, setActive] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [visible, setVisible] = useState(false)
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
      <header className='header'>
        <nav className={navbar ? "nav_bg" : '' }>
          <div className="logo">
            <h2>Sydney</h2>
          </div>
          <div className="nav_items">
            <ul className={sidebar ? 'show' : ''}>
              <div>
                <div className="logo nav-logo">
                  <h2><i class="fa-solid fa-seedling"></i>Sydney</h2>
                </div>
                <div className="cancel-btn" onClick={() => setSidebar(false)}>
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <div className="search-icon" onClick={() => setActive(!active)}>
              {active ? <i class="fa-solid fa-xmark icon-search"></i> : <i class="fa-solid fa-magnifying-glass icon-search"></i>}
            </div>
          </div>
          {
            active ? <div className="search">
              <input type="text" placeholder='search here ...' />
              <Button1 text='Search' class='search-btn' />
            </div> : null
          }

          <div className="menu-btn" onClick={() => setSidebar(true)}>
            {
              sidebar ? '' : <i class="fa-solid fa-align-justify"></i>
            }

          </div>
            {
              visible ?  <div className="scroll-btn" onClick={scrollToTop}>
              <i class="fa-solid fa-chevron-up"></i>
            </div> : ''
            }
          
        </nav>
      </header>
    </>
  )
}

export default Navbar