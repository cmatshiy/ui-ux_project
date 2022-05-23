import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Letter } from '../../components';
import { assets } from '../../material';
import './footer.css';

const Footer = () => (
  <div className="react_footer section_padding" id="login">
    <FooterOverlay />
    <Letter />

    <div className="react_footer-links">
      <div className="react_footer-links_contact">
        <h1 className="react_footer-headtext">Contact Us</h1>
        <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p_opensans">013-344-3333</p>
        <p className="p_opensans">013-555-3333</p>
      </div>

      <div className="react_footer-links_logo">
        <img src={assets.hotel5} alt="footer_logo" />
        <p className="p_opensans">&quot; The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={assets.hotel2} className="food_img" style={{ marginTop: 15 }} />
        <div className="react_footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="react_footer-links_work">
        <h1 className="react_footer-headtext">Working Hours</h1>
        <p className="p_opensans">Monday-Friday:</p>
        <p className="p_opensans">08:00 am - 12:00 am</p>
        <p className="p_opensans">Saturday-Sunday:</p>
        <p className="p_opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p_opensans">2022 Chrisy. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
