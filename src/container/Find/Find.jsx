import React from 'react';
import { SubHeading } from '../../components';
import { assets } from '../../material';

const Find = () => (
  <div className="react_bg react_wrapper section_padding" id="contact">
    <div className="react_wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext_cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="react_wrapper-content">
        <p className="p_opensans">Chrisy, 234 Church Street Colloyn,PRETORIA, 0083 SA</p>
        <p className="p_cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Working Hours</p>
        <p className="p_opensans">Mon - Fri: 9:00 am - 03:00 am</p>
        <p className="p_opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom_button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="react_wrapper_img">
      <img src={assets.hotel6} alt="finus_img" />
    </div>
  </div>
);

export default Find;
