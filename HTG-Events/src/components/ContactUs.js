import React, { useState, useEffect } from 'react';
import './ContactUs.css'; // Import CSS for background color animation
import { FaPhoneAlt, FaRegEnvelope, FaHome } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const contactInfo = document.querySelector('.contact-info');
      if (contactInfo) {
        const contactInfoPosition = contactInfo.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Add animated class when contact-info div is in view
        if (contactInfoPosition < screenHeight * 0.75) {
          contactInfo.classList.add('animated');
        } else {
          contactInfo.classList.remove('animated');
        }
      }
    };

    // Event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={`contact-us-page ${isLoading ? 'loading' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>Please feel free to contact us with any questions or inquiries. We're here to help!</p>
              <ul className="contact-details">
                <li> <FaRegEnvelope /> example@example.com</li>
                <li><FaPhoneAlt /> 123-456-7890</li>
                <li><FaHome /> 123 Event Management Street, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="contact-form" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <section className="additional-content">
        <div className="container">
          <h2>Join Our Events Today!</h2>
          <p>Discover amazing events in your area. Join now and never miss out on the fun!</p>
          <button className="btn btn-success"><Link to='/'>Explore Events</Link></button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
