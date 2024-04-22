import React from 'react';
import './Exclusive.css';

const Exclusive = () => {
  return (
    <div className="exclusive-details-page">
      <header className="header">
        <div className="container">
          <h1>Exclusive Event Details</h1>
        </div>
      </header>
      
      <section className="event-details">
        <div className="container">
          <h2>HTG-Events</h2>
          <br/>
          <p>HTG-Events is a versatile platform designed to streamline event planning for colleges, social gatherings, and corporate functions. It simplifies the process by offering intuitive tools for scheduling, managing attendees, and promoting events effectively. Specifically tailored for colleges, it acts as a centralized hub for organizing student activities and academic events, fostering a vibrant campus community. Social events are made seamless with features for inviting guests, managing RSVPs, and sharing event details effortlessly. For businesses, HTG-Events provides specialized solutions for coordinating corporate conferences, seminars, and team-building retreats, enabling organizers to achieve their objectives efficiently. With its user-friendly interface and comprehensive functionality, HTG-Events aims to empower organizers across diverse sectors, ensuring that every event is planned and executed with ease and success.</p>
          {/* Add more details about the event */}
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <h2>HTG-Events: Event Gallery</h2>
          {/* Add image gallery of the event */}
        </div>
      </section>

      <section className="location">
        <div className="container">
          <h2>HTG-Events: Event Location</h2>
          {/* Add map or address of the event location */}
        </div>
      </section>
    </div>
  );
};

export default Exclusive;
