import React from 'react';
import { SubHeading } from '../../components';
import { assets } from '../../material';
import './chef.css';

const Chef = () => (
  <div className="react_bg react_wrapper section_padding">
    <div className="react_wrapper_img react_wrapper_img-reverse">
      <img src={assets.chef3} alt="chef_image" />
    </div>
    <div className="react_wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext_cormorant">What we believe in</h1>

      <div className="react_chef-content">
        <div className="react_chef-content_quote">
          <img src={assets.name} alt="quote_image" />
          <p className="p_opensans"> Come and sit in our health Chrisy restaurant, our ingredients are real, our food is good for you</p>
        </div>
        <p className="p_opensans">We stand for something GOOD@ in everything we do. Our resturant is a choice for any occasion </p>
      </div>

      <div className="react_chef-sign">
        <p>Chris Smith</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={assets.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
