import React from 'react';
import mail from '../images/mail.png';
import contact from '../images/contact.jpg';
import location from '../images/location.png';
import youtubeIcon from '../images/yt.png';
import fbIcon from '../images/fb.png';
import linkedinIcon from '../images/linked.png';
import gmailIcon from '../images/blogger.png';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-item">
          <img src={mail} alt="Mail" className="footer-icon" />
          <p className="footer-para">example@example.com</p>
        </div>
        <div className="footer-item">
          <img src={contact} alt="Contact" className="footer-icon" />
          <p className="footer-para">+1234567890</p>
        </div>
        <div className="footer-item">
          <img src={location} alt="Location" className="footer-icon" />
          <p className="footer-para">Your Address Here</p>
        </div>
        
        {/* New Products and Services Section */}
        <div className="footer-link-section">
          <div className="footer-heading">
            <h4>Products</h4>
            <ul>
              <li>Earth moving equipment</li>
              <li>Foundation Equipment</li>
              <li>Attachment</li>
            </ul>
          </div>
          <div className="footer-heading">
            <h4>Services</h4>
            <ul>
              <li>Rentals</li>
              <li>Refurbishment</li>
            </ul>
          </div>
        </div>

        {/* Policies and Other Links Section */}
        
        {/* Copyright */}
        <div className="footer-copyright">
          <p>SureTech Infrastructure Pvt. Ltd. - All rights reserved</p>
        </div>
      </div>


      <div className="footer-content">
        <div className="footer-form-section">
          <h4 className="footer-h4">React Out to Me</h4>
          <form className="footer-form">
            <div className="footer-form-item">
              <label className="footer-label" htmlFor="fullname">Full Name <span className="required">*</span></label>
              <input type="text" id="fullname" name="fullname" required />
            </div>
            <div className="footer-form-item">
              <label htmlFor="email">Email ID<span className="required">*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="footer-form-item">
              <label htmlFor="contact">Contact<span className="required">*</span></label>
              <input type="text" id="contact" name="contact" required />
            </div>
            <div className="footer-form-item">
              <label htmlFor="message">Your Requirement<span className="required">*</span></label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="footer-button">Get Quotation</button>
          </form>
        </div>
      </div>


      
      <div className="footer-content">
      <div className="footer-policies-section">
          <div className="footer-policies">
            <ul className="footer-policies-list">
              <li><b>Policies</b></li>
              <li>Terms and Conditions</li>
              <li>Shipping Policy</li>
              <li>Other Policy</li>
            </ul>
          </div>
          <div className="footer-other-links">
            <ul className="footer-other-links-list">
              <li><b>Other Links</b></li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Media</li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="footer-social-icons">
          <img src={youtubeIcon} alt="YouTube" className="footer-social-icon" />
          <img src={fbIcon} alt="Facebook" className="footer-social-icon" />
          <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
          <img src={gmailIcon} alt="Gmail" className="footer-social-icon" />
        </div>
        </div>



      {/* Contact Form Section (Adjacent to Footer Content) */}
      
    </div>
  );
};

export default Footer;
