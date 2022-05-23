import React from 'react';
import { SubHeading } from '../../components';
import { assets } from '../../material';
import './header.css';

const Header = () => (
  <div className="react_header react_wrapper section_padding" id="home">
    <div className="react_wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="react_header-h1">Nothing Brings People Together Like Our Food and Drinks</h1>
      <p className="p_opensans" style={{ margin: '2rem 0' }}>Our restaurant meals are served in bigger than what is recommended </p>
      <button type="button" className="custom_button">Explore Menu</button>
    </div>

    <div className="react_wrapper_img">
      <img src={assets.hotel5} alt="header_img" />
    </div>
  </div>

);

export default Header;
