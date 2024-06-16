import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  // Define an array of routes where the Footer should be hidden
  const hiddenRoutes = ['/login', '/CllgLogin', '/sign', '/CllgSign', '/forget'];

  // Get the current route
  const currentRoute = window.location.pathname;

  // Check if the footer should be hidden based on the current route
  const isFooterHidden = hiddenRoutes.includes(currentRoute);
  return isFooterHidden ? null : (
    <>
    <div className='footer-container'>
      <div className='main-footer'>
      <div className="footer-logo">
        <img className='footer-logo-img' src={require("../images/logo.png")} alt="" />
      </div>
      <div className="links m1 r1">
        <h2>EVENTS</h2>
        <ul>
          <li><Link to='/fresherParty'>Fresher's Party</Link></li>
          <li><Link to='/farewell'>Farewell Party</Link></li>
          <li><Link to='/seminar'>Seminar/Webinar</Link></li>
          <li><Link to='/annualFunction'>Annual Function</Link></li>
          <li><Link to='/art&fun'>Art & Fun</Link></li>
          <li><Link to='/corporate'>Corporate Event</Link></li>
    
        </ul>
      </div>
      <div className="imp-links m1 ">
      <h2>COMPANY</h2>
        <ul>
        <li><Link to='/about'>About</Link></li>
          <li>Support</li>
          <li>Feedback</li>
          <li><Link to='/exclusive'>Exclusive Details</Link></li>
          <li>Advertise</li>
        </ul>
      </div>
      <div className="policy m1">
      <h2>POLICY</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="contact m1">
      <h2>CONTACT</h2>
        <ul>
        <li><Link to='/contact'>Contact Us</Link></li>
          <li>htg.teamwork03@gmail.com</li>
          <br/>
          <div className='contact-images'>
          <img src={require("../images/Daco_99265.png")} alt="" width={50}/>
          <img src={require("../images/facebook.png")} alt="" width={60}/>
          </div>
        </ul>
      </div>
      </div>
      <br/>
      <div className="copyright-footer">
        <p className='copyright-content'>Copyright &copy; HTG-Events.com | All rights reserved</p>
      </div>
    </div>
      
    </>
  )
}

export default Footer
