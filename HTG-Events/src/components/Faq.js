import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className='faq-h mt-4'>
                <h1>FAQ's</h1>
                <br />
            </div>
            <div className='faq-div'>
                <div class="accordion w-100" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                               What types of events can I organize through your platform?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ">
                            <div class="accordion-body">
                            Our platform supports a wide range of events including conferences, seminars, workshops, parties, weddings, concerts, and more. Whether it's corporate or personal, we've got you covered.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            How do I create an event on your website?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            Creating an event is simple. Just sign up or log in to your account, and then navigate to the "Create Event" section. Follow the prompts to input event details, such as date, time, location, and ticketing options.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            How can I promote my event through your website?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            We provide various promotional tools to help you reach your target audience. You can utilize features such as event listing optimization, email marketing, social media integration, and partner promotions to maximize exposure for your event.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
