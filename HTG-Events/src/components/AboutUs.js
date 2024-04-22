import React, { useEffect } from 'react';
import './about.css';
import collegeEventImage from '../images/collegeEventImage.jpg';
import socialEventImage from '../images/socialEventImage.jpg';
import corporateEventImage from '../images/corporateEventImage.jpg';

const AboutUs = () => {
    
    return (
        <div className='about-container'>
            <div className='about-h'>
                <h1>About Us</h1>
                </div>
            <section className="about-us-section1 about-us-intro">
                <div className="about-us-main">
                    <p>
                        Welcome to HTG-Events! We specialize in managing a diverse range of events including college, social, and corporate gatherings. Our mission is to create unforgettable experiences that inspire, engage, and connect people from all walks of life.
                    </p>
                    {/* <p>
                    Welcome to our premier event management services, where we specialize in providing a fully operational and customized platform for creating memorable and successful events. Our comprehensive approach is designed to offer seamless event management solutions, ensuring a stress-free and enjoyable experience for our clients. With a focus on customization, professionalism, seamless management, stress-free experiences, and top-notch quality services, we aim to exceed expectations and create unforgettable moments.
                    </p> */}
                    <p>
                    Our platform is built on the foundation of customization, understanding that every event is unique and requires personalized solutions. Whether it's a corporate conference, a wedding celebration, a social gathering, or any other special occasion, we tailor our services to meet the specific needs and preferences of our clients. From the initial consultation to the final execution, our team works closely with you to understand your vision, objectives, and requirements, ensuring that every detail is carefully considered and implemented.
                    </p>
                    <p>
                    Seamless management is at the core of what we do. We handle every aspect of event management, including venue selection, logistics, vendor coordination, entertainment, catering, audiovisual setup, and on-site management. Our streamlined approach ensures that all elements come together flawlessly, allowing you to focus on the event itself without worrying about the logistics. From concept to completion, we manage every stage of the event with precision and expertise, ensuring a smooth and hassle-free experience.
                    </p>
                    <p>
                    Our commitment to quality services sets us apart in the industry. We have established strong partnerships with trusted vendors, suppliers, and service providers, ensuring that we deliver excellence in every aspect of the event. Whether it's the quality of food and beverages, the professionalism of our staff, or the creativity of our entertainment options, we strive for perfection in every detail. Our goal is not just to meet expectations but to exceed them, leaving a lasting impression on our clients and their guests.
                    </p>
                </div>
            </section>
            <div className='s-h'>
                    <h1>Our Services</h1>
                </div>
            <section className="about-us-section">
                <div className="about-us-image">
                    <img src={collegeEventImage} alt="College Event" />
                </div>
                <div className="about-us-content">
                    <h2>College Events</h2>
                    <p>
                        At HTG-Events, we pride ourselves in organizing dynamic and engaging college events that foster creativity, collaboration, and camaraderie among students. From cultural festivals to academic conferences, we curate experiences that leave a lasting impact.
                    </p>
                </div>
            </section>

            <section className="about-us-section">
                <div className="about-us-content">
                    <h2>Social Events</h2>
                    <p>
                        Our social events are designed to bring people together, celebrate special moments, and create unforgettable memories. Whether it's a birthday bash, a themed party, or a charity fundraiser, we ensure every detail is meticulously planned for maximum enjoyment.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={socialEventImage} alt="Social Event" />
                </div>
            </section>

            <section className="about-us-section">
                <div className="about-us-image">
                    <img src={corporateEventImage} alt="Corporate Event" />
                </div>
                <div className="about-us-content">
                    <h2>Corporate Events</h2>
                    <p>
                        HTG-Events specializes in organizing professional and impactful corporate events that drive business success. From product launches to team-building retreats, we collaborate closely with businesses to deliver tailor-made experiences that exceed expectations.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
