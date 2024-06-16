import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from 'react-toastify';
import { Link } from 'react-router-dom'
import party from './party.jpeg';
import annual from './annual.jpg';
import seminar from './seminar.jpg';
import fresher from './freshers.jpg';
import farewell from './farewell.jpg';
import art from './art.jpg';
import corporate from './corporate.png';

const EventDetail = () => {
  const [showForm, setShowForm] = useState(false);

  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};

  const toggleForm = () => {
    setShowForm(!showForm);

  };

  const [randomImages] = useState([party, annual, seminar, fresher, farewell, art, corporate]);
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const getEvent = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/event/eventDetail/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setEvent(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
      getEvent();
  }, []);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.position = 'static';
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  // };

  //Event Registration
  const [credentials, setCredentials] = useState({studentname: '', studentrollno: '', studentemail: '', studentbranch: '', studentyear: '', studentmobile: ''});
  // const [selectedOption, setSelectedOption] = useState('');


  const handleInputChange = (e) => {
    setCredentials({...credentials,[e.target.name]: e.target.value })
    // setSelectedOption(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!credentials.studentname || !credentials.studentrollno || !credentials.studentemail || !credentials.studentbranch || !credentials.studentyear || !credentials.studentmobile ) {
      toast.error('All fields are mandatory. Please fill in all the fields.');
      return;
     }
    const response = await fetch("http://localhost:5000/api/eventRegistration/registerEvent",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({studentname: credentials.studentname, studentrollno: credentials.studentrollno, studentemail: credentials.studentemail, studentbranch: credentials.studentbranch, studentyear: credentials.studentyear, studentmobile: credentials.studentmobile, eventname: event.eventname, eventdate: event.eventdate, eventtime: event.eventtime, eventlocation: event.eventaddress})  
    });
    const json = await response.json();
    console.log(json); 
    toast.success("Successfully Registered for the event.");
    setShowForm(false);
    // window.location.reload();
    window.scrollTo(0,0);
  };
  

  return (
    <div>
        <div className='ED-container'>
          <br />
          <div className='ed-img-div'>
            <img src={getRandomImage()} className='ed-img' alt='Event-detail-Pic' />
          </div>
          <br />
          <div className='event-name'>
            <h3><i>{event.eventname}</i></h3>
          </div>
          <br />
          <div className='event-info '>
            <div className='event-time'>
              <h5>Date:&nbsp;<span className='e-t'>{event.eventdate}</span></h5>
              <h5>Time:&nbsp;<span className='e-t'>{event.eventtime}</span></h5>
              <h5>Location:&nbsp;<span className='e-t'>{event.eventaddress}</span></h5>
              
            </div>
            <div className='e-con'>
              <h5>Email:&nbsp;<span className='e-t'>&nbsp;{event.eventemail}</span></h5>
              <h5>Phone:&nbsp;<span className='e-t'>+91-{event.eventPhone}</span></h5>
            </div>
          </div>
          <div className='event-d-d'>
            <p>{event.eventdescription}</p>
          </div>
          {localStorage.getItem('token')?<div>
          <div className='r-btn'>
            <button className="r-b" onClick={toggleForm}>Register</button>
            <Link to="/"><button className='b-b'>Back</button></Link>
          </div> 

          <div className="container">
            {showForm && (
              <div className="registration-form">
                <button className="close-btn" onClick={closeForm}>X</button>
                <h3 className='text-center mb-3'>Event Registration Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group reg-form-label">
                    <label htmlFor="studentname">Name</label>
                    <input type="text" className="form-control" id="studentname" name="studentname" value={credentials.studentname} onChange={handleInputChange} placeholder="Enter your name" required />
                  </div>
                  <div className="form-group reg-form-label">
                    <label  htmlFor="studentrollno">Roll No</label>
                    <input type="text" className="form-control" id="studentrollno" name="studentrollno" rows="2" value={credentials.studentrollno} onChange={handleInputChange} placeholder="Enter your roll number" required />
                  </div>
                  <div className="form-group reg-form-label">
                    <label htmlFor="studentemail">Email</label>
                    <input type="email" className="form-control" id="studentemail" name="studentemail" value={credentials.studentemail} onChange={handleInputChange} placeholder="Enter your email" required />
                  </div>
                  <div className="form-group reg-form-label">
                    <label htmlFor="studentbranch">Branch</label>
                    <div>
                    <select name="studentbranch" id="studentbranch" onChange={handleInputChange} value={credentials.studentbranch}>
                        <option value="" disabled hidden>---Select Your Branch---</option>
                        <option value="CS">CSE</option>
                        <option value="IT">IT</option>
                        <option value="BT">BT</option>
                        <option value="AG">AG</option>
                        <option value="CE">CE</option>
                        <option value="EE">EE</option>
                        <option value="ECE">ECE</option>
                    </select>
                    </div>
                  </div>
                  <div className="form-group reg-form-label">
                  <label htmlFor="studentyear">Year</label>
                  <div>
                    <select name="studentyear" id="studentyear" onChange={handleInputChange} value={credentials.studentyear}>
                        <option value="" disabled hidden>---Select Your Year---</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                    </select>
                  </div>
                  </div>
                  <div className="form-group reg-form-label">
                    <label htmlFor="studentmobile">Mobile</label>
                    <input type="tel" className="form-control" id="studentmobile" placeholder="Enter your mobile number" name="studentmobile" value={credentials.studentmobile} onChange={handleInputChange} required />
                  </div>
                  
                  <div className='r-btn'>
                    <button type='submit' className="r-b">Submit</button>
                  </div>
                </form>
              </div>
            )}
          </div>
          </div>:<div className="container mt-5">
              <div className='r-btn'>
                <Link to="/login"><button className='r-b'>Register</button></Link>
                <Link to="/"><button className='b-b'>Back</button></Link>
              </div>
            </div>}
        </div>
        <ToastContainer {...toastOption}/>
    </div>
  );
}

export default EventDetail;
