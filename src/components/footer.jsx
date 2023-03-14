import React from "react";
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-image" src={logo}/>
        <h4>About Us</h4>
        <h4>Careers</h4>
        <h4>Privacy Notice</h4>
        <h4>Social Impact</h4>
        <h4>Order and Pickup</h4>
        <h5>© 2023 Bagel Meets Coffee</h5>
      </div>
    </footer>
  );
}

export default Footer;