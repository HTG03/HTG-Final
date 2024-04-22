import React from 'react';
import { useSpring, animated} from 'react-spring';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import p1 from './p1.png';
import p4 from './p4.png';
import p2 from './p2.png';
import p5 from './p5.png';
import p3 from './p3.png';
import p6 from './p6.png';
import './Testimonials.css'; // Import CSS file for styling

const Testimonials = () => {
  
  const testimonials = [
    { id: 1, imgSrc: p1, name: "Harry Winston", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, imgSrc: p4, name: "Emma Jack", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 1, imgSrc: p3, name: "Shantanu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, imgSrc: p2, name: "Rahul Sisodiya", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 1, imgSrc: p5, name: "Charlie Dean", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, imgSrc: p6, name: "Jane Smith", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    
    // Add more testimonials here
  ];

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <div className='testimonials-main'>
      <h1 className='testimonials-head'>Testimonials</h1>
      <animated.div style={animationProps} className="testimonials-container">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <div className="testimonial-img-container">
            <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-img" />
          </div>
          <div className="testimonial-info">
            <p className="testimonial-description"><FaQuoteLeft /> {testimonial.description} <FaQuoteRight /></p>
            <h2 className="testimonial-name">{testimonial.name}</h2>
          </div>
        </div>
      ))}
    </animated.div>
    <br/>
    <hr/>
    </div>
  );
}

export default Testimonials;
