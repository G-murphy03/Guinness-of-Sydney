import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <div className='logo-copyright'>
          <img
          src={require("../assets/guinness-of-sydney-logo.png")}
          className="footer-logo"
          alt="logo"
        />
        <p className="footer-text">Guinness of Sydney ©2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
