import React from 'react';

// TODO: Work on CSS
function Footer() {
    return (
        <div>
            <footer className='footer'>
                <img src={require('../assets/guinness-of-sydney-logo.jpg')} className='footer-logo'></img>
                <p className='footer-text'>Guinness of Sydney</p>
            </footer>
        </div>
    )
};

export default Footer;