import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import assets from '../../material/assets';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="react_navbar">
      <div className="react_navbar-logo">
        <img src={assets.name4} alt="react_logo" />
      </div>
      <ul className="react_navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#menu">Menu</a></li>
        <li className="p_opensans"><a href="#awards">Awards</a></li>
        <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="react_navbar-login">
        <a href="#login" className="p_opensans">Log In / Sign-Up</a>
        <div />
        <a href="/" className="p_opensans">Book Table Now</a>
      </div>
      <div className="react_navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="react_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className="react_navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
