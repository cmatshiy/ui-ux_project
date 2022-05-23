import React from 'react';
import SubHeading from '../sub/SubHeading';
import './letter.css';

const Letter = () => (
  <div className="react_newsletter">
    <div className="react_newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext_cormorant">Subscribe To Our Newsletter</h1>
      <p className="p_opensans">And never miss latest Updates!</p>
    </div>
    <div className="react_newsletter-input flex_center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom_button">Subscribe</button>
    </div>
  </div>
);

export default Letter;
