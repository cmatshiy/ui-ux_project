import React from 'react';
import { assets } from '../../material';
import './about.css';

const AboutUs = () => (
  <div className="react_aboutus react_bg flex_center section_padding" id="about">
    <div className="react_aboutus-overlay flex_center">
      <img src={assets.name1} alt="G_overlay" />
    </div>

    <div className="react_aboutus-content flex_center">
      <div className="react_aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={assets.manu1} alt="food_spoon" className="food_img" />
        <p className="p_opensans">Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>

      <div className="react_aboutus-content_knife flex_center">
        <img src={assets.manu2} alt="about_knife" />
      </div>

      <div className="react_aboutus-content_history">
        <h1 className="headtext_cormorant">Our History and Background</h1>
        <img src={assets.manu1} alt="food_spoon" className="food_img" />
        <p className="p_opensans">The award-winning chefs use the best quality ingredients to produce food that are simply delightful. The restaurant also offers a wonderful drink and food menu, and they offer one of the best wines in the region.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>
    </div>
  </div>
);
export default AboutUs;
