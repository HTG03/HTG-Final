import React, { useState } from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaHamburger, FaTimes, FaAngleDown } from "react-icons/fa";

function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  let ham = () => {
    document.querySelector(".nav-close-btn").style.display = "block";
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".navbar-contain2").style.visibility = "visible";
  }
  let hideHam = () => {
    document.querySelector(".nav-close-btn").style.display = "none";
    document.querySelector(".hamburger").style.display = "block";
    document.querySelector(".navbar-contain2").style.visibility = "hidden";
  }
  const navigate = useNavigate();

  const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/');
      window.location.reload();
      window.scrollTo(0,0);

  }
  const handleLogoClick = () => {
    // Reload the entire page when the logo is clicked
    window.location.reload();
  };
  // Define an array of routes where the Navbar should be hidden
  const hiddenRoutes = ['/login', '/CllgLogin', '/sign', '/CllgSign', '/forget'];

  // Get the current route
  const currentRoute = window.location.pathname;

  // Check if the Navbar should be hidden based on the current route
  const isNavbarHidden = hiddenRoutes.includes(currentRoute);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === '0') {
      navigate('/login');
    } else if (event.target.value === '1') {
      navigate('/CllgLogin');
    }
  };
  return isNavbarHidden ? null : (
    <>
      <div ref={navRef} className='navbar-container'>
        <div className="navbar-contain1">
          <img src={require("../images/logo.png")} alt=""  onClick={handleLogoClick}/>
          <div className="logo-name">
            <div className="first">HTG Events</div>
            <div className="second">Events, Elevated</div>
          </div>
        </div>
        <div className="navbar-contain2">
          <button style={{ display: 'none' }} className='nav-btn nav-close-btn' onClick={hideHam}>
            <FaTimes />
          </button>
          <ul className='nav-menu'>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/about'>About Us</Link></li>
            <li className='nav-item'>
              <div className="dropdown">
                <button className='dropbtn'>Events  <FaAngleDown/></button>
                <div className="dropdown-content">
                  <Link to="/annualFunction">Annual Function</Link>
                  <Link to="/fresherParty">Fresher's Party</Link>
                  <Link to="/farewell">Farewell Party</Link>
                  <Link to="/corporate">Coporate Event</Link>
                  <Link to="/art&fun">Art & Fun</Link>
                  <Link to="/seminar">Seminar/Webinar</Link>
                </div>
              </div>
            </li>
            <li className='nav-item'><Link to="/exclusive">Exclusive Details</Link></li>
            <li className='nav-item'><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {!localStorage.getItem('token')?<div className="navbar-contain3">
          <select name="lgn" id="login" onChange={handleSelectChange} value={selectedOption}>
            <option value="" disabled hidden className='myaccount'>My Account</option>
            <option value="0">Student</option>
            <option value="1">University</option>
          </select>
        </div>:<div className="logdown">
                <button className='logbtn'><img src={require('../images/myaccount.png')} alt="" width={47}/></button>
                <div className="logdown-content">
                    <Link to="/" onClick={() => { handleLogout();}} >Logout</Link>
                </div>
            </div>}
        <button className='hamburger' onClick={ham}>
          <FaBars />
        </button>

      </div>
    </>
  )
}

export default Navbar;
