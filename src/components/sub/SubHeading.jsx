import React from 'react';
import { assets } from '../../material';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p_cormorant">{title}</p>
    <img src={assets.manu1} alt="food_image" className="food_img" />
  </div>
);

export default SubHeading;
