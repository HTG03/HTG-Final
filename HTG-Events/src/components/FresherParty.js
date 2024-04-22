import React from 'react';
import './annualFun.css'; // Make sure to create the CSS file
import fresher from '../images/fresher.jpg'

const FresherParty = () => {
    return (
        <div className="annual-function-container">
            <div className="annual-function-image">
                <img src={fresher} alt="Annual Function" />
            </div>
            <div className="annual-function-description">
                <h2>Fresher's Party</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec libero purus.
                    Maecenas convallis vehicula nulla, non tincidunt dui tempor a. Duis ac enim non
                    odio pulvinar feugiat. Vivamus posuere ultricies est, et lobortis risus tristique eget.
                    Vestibulum condimentum auctor ex, at interdum ex lacinia sed. Vestibulum in metus eget
                    justo tincidunt fringilla sit amet vitae nulla. Cras vitae eros neque. Duis et tempus ipsum,
                    vitae fringilla libero. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Sed ut arcu ut libero vestibulum venenatis.
                </p>
            </div>
        </div>
    );
}

export default FresherParty;
