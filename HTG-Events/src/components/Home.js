import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import party from './party.jpeg';
import annual from './annual.jpg';
import seminar from './seminar.jpg';
import fresher from './freshers.jpg';
import farewell from './farewell.jpg';
import art from './art.jpg';
import corporte from './corporate.png';
import bg from './bg.jpg';
import Slider1 from './Slider1.jpg';
import slider2 from './slider2.jpg';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
import bg4 from '../images/bg4.jpg';
import bg5 from '../images/bg5.jpg';


import CreateEvent from './CreateEvent';
import Testimonials from './Testimonials';
import Faq from './Faq';
function Home() {
  const [randomImages] = useState([party, annual, seminar, fresher, farewell, art, corporte]); // Array of image URLs

  const [notes, setNotes] = useState([]); // To store API data
  const getNotes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/event/fetchallevents`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
        console.log(notes)
      } catch (error) {
        console.log(error.message);
      }
    };
    useEffect(() => {
       // Fetch notes immediately after login
          getNotes();
    }, []);
    
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      return randomImages[randomIndex];
    };

    // Function to truncate text to a fixed length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className='home-div'>
      <div className='wel-div' >
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={bg2} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>College Events</h5>
                <p>College events are organized activities and gatherings designed to enhance the educational experience, foster community engagement, and provide opportunities for personal and professional growth among students.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={bg5} class="d-block w-100 " alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Coporate Events</h5>
                <p>Corporate events are organized gatherings specifically designed for business purposes, aimed at fostering professional development, team building, networking, and promoting organizational goals. </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={bg4} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Social Events</h5>
                <p>Social events are gatherings organized to foster social interaction, entertainment, and community engagement.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className='w-h'>
        <h1>Welcome to HTG Events</h1>
      </div>
      <div className='w-msg'>
        <h3 className='welcome-text'>Elevating your online event experiences effortlessly.</h3>
      </div>
      <br />
      <hr/>
      <div className='upcoming-events'>
  <h2>Upcoming Events</h2>
  
    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 events-container">
      {notes.map((item) => (
        <div key={item._id} className="col events-div">
          <div className="card" style={{ width: "18rem" }}>
            <img src={getRandomImage()} className="card-img" alt="Event-Img" />
            <div className="card-body more-info-btn">
              <h5 className="card-title">{item.eventname}</h5>
              <p className="card-text">{truncateText(item.eventdescription, 100)}</p>
              <Link to={`/eventDetail/${item._id}`} className="btn btn-primary more-info-btn">More Info</Link>
            </div>
          </div>
        </div>
      ))}
    </div>

</div>

      
      {/* Our Services */}
      <div className='our-services'>
        <div className='services-p'>OUR SERVICE</div>
        <div className='services-h1'>
          <h1>What We Offer</h1>
        </div>
        <div className='service-btn'>
          <div className='s-btn' data-toggle="modal" data-target="#collegeEventModal">College Events</div>
          <div className='s-btn' data-toggle="modal" data-target="#socialEventModal">Social Events</div>
          <div className='s-btn' data-toggle="modal" data-target="#corporateEventModal">Corporate</div>
        </div>
      </div>
  
      
      {/* <!-- College Event Modal --> */}
      <div class="modal fade" id="collegeEventModal" tabindex="-1" role="dialog" aria-labelledby="collegeEventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="collegeEventModalLabel">College Event</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- Add your content for the college event here --> */}
              Managing college events has never been easier! Our user-friendly website platform simplifies the process, making it accessible to everyone from student leaders to faculty members and event organizers. With our tools, you can effortlessly plan, organize, and execute memorable events such as farewell parties, college games, and other special occasions. Whether you're coordinating a small gathering or a large-scale event, our platform empowers you to create experiences that leave a lasting impression on your college community. Say goodbye to complex event planning and hello to streamlined processes that ensure every detail is taken care of. Join us today and revolutionize the way you manage college events!
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Social Event Modal --> */}
      <div class="modal fade" id="socialEventModal" tabindex="-1" role="dialog" aria-labelledby="socialEventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="socialEventModalLabel">Social Event</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- Add your content for the social event here --> */}
              Plan and manage your social events easily with our platform. Create events, invite people, and spread the word through social media and personalized event pages. Sell tickets or manage registrations smoothly. Work together with your team and check people in easily on the day of the event. Get feedback afterward to make your events even better. Customize event pages to match your style and get help from our team whenever you need it. With our simple platform, anyone can organize fun events that everyone will enjoy. Join us now and make your events unforgettable!
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Corporate Event Modal --> */}
      <div class="modal fade" id="corporateEventModal" tabindex="-1" role="dialog" aria-labelledby="corporateEventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="corporateEventModalLabel">Corporate Event</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <!-- Add your content for the corporate event here --> */}
              Welcome to our platform for managing corporate events easily. You can create event details, send invitations, and promote your event through emails and branded pages. Selling tickets and organizing registrations is simple, and you can stay organized with tools like task lists and timelines. Work together with your team and check people in smoothly with mobile-friendly options. After the event, get feedback and see how it went to improve next time. Keep your company's look with branded event pages, and we're here to help you every step of the way. Simplify your corporate events with us today!
            </div>
          </div>
        </div>
      </div>
      <br/>
      
    {/* crete your own event */}
     <div>
        <CreateEvent/>
        <Testimonials/>
        <Faq/>
     </div>
    </div>
  )  
}

export default Home;
