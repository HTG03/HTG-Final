import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import './CreateEvent.css';
import create from './create.gif';
import { FaPlusCircle, FaRegTimesCircle } from "react-icons/fa";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import reg from '../images/reg.png';
{/* <div className='create-btn'><button onClick={() => setShowForm(true)}>Create Event <FaPlusCircle className='mb-1' /></button></div> */ }


const CreateEvent = () => {
  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
  const [credentials, setCredentials] = useState({eventname: '', eventdescription: '', eventdate: '', eventtime: '', eventemail: '', eventPhone: '', eventaddress: ''})
  const [showForm, setShowForm] = useState(false);
  // if (showForm == true) {
  //     document.body.style.position="fixed";
  // }

  const handleInputChange = (e) => {
    setCredentials({...credentials,[e.target.name]: e.target.value })
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!credentials.eventname || !credentials.eventdescription || !credentials.eventdate || !credentials.eventtime || !credentials.eventemail || !credentials.eventPhone || !credentials.eventaddress) {
      toast.error('All fields are mandatory. Please fill in all the fields.');
      return;
     }
    const response = await fetch("http://localhost:5000/api/event/addevent",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({eventname: credentials.eventname, eventdescription: credentials.eventdescription, eventdate: credentials.eventdate, eventtime: credentials.eventtime, eventemail: credentials.eventemail, eventPhone: credentials.eventPhone, eventaddress: credentials.eventaddress})  
    });
    const json = await response.json();
    console.log(json); 
    toast.success("Event is saved in database.");
    setShowForm(false);
    window.location.reload();
    window.scrollTo(0,0);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className='own-event'>
        <div className='create-gif'>
          <img src={reg} className='create-gif-pic' />
        </div>
        <div className='create-div'>
          <div className='create-h'><h1><i>Create Your Own Event </i></h1></div>
          <div className='create-p'>
            <p>Join us in crafting memorable experiences and building connections by hosting your own event on our website! Whether you're a passionate individual, a community leader, or a business looking to engage with your audience, our platform offers you the perfect stage to showcase your ideas, talents, and initiatives.</p>
          </div>
          <div>
          {localStorage.getItem('token')?<div className="container mt-5">
              <div className='create-btn'><button onClick={() => setShowForm(true)}>Create Event <FaPlusCircle className='mb-1' /></button></div>

              {showForm && (
                <div className="popup-form">
                  <div className="popup-content">
                  <button className="btn-close" onClick={handleCloseForm}><FaRegTimesCircle /></button>
                    <h3 className="mb-4">Event Registration Form</h3>
                  
                    <form onSubmit={handleSubmit}>
                      <div className="form-group create-event-label">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" className="form-control" id="eventname" name="eventname" value={credentials.eventname} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group create-event-label">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea className="form-control" id="eventdescription" name="eventdescription" rows="2" value={credentials.eventdescription} onChange={handleInputChange} required></textarea>
                      </div>
                      <div className="form-group create-event-label">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="eventdate" name="eventdate" value={credentials.eventdate} onChange={handleInputChange} required />
                      </div>

                      <div className="form-group create-event-label">
                        <label htmlFor="time">Time</label>
                        <input type="time" className="form-control" id="eventtime" name="eventtime" value={credentials.eventtime} onChange={handleInputChange} required />
                      </div>

                      <div className="form-group create-event-label">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="eventemail" name="eventemail" value={credentials.eventemail} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group create-event-label">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control" id="eventPhone" name="eventPhone" value={credentials.eventPhone} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group create-event-label">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="eventaddress" name="eventaddress" value={credentials.eventaddress} onChange={handleInputChange} required />
                      </div>
                
                      <div className='r-btn'>
                        <button type='submit' className="r-b">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>:<div className="container mt-5">
              <div className='create-btn'><Link to="/CllgLogin"><button>Create Event <FaPlusCircle className='mb-1' /></button></Link></div>
            </div>}
          </div>
        </div>
      </div>
      <br/>
      <hr/>
    <ToastContainer {...toastOption}/>
    </div>
  );
}


export default CreateEvent;
