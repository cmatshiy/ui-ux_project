import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { assets, data } from '../../material';

import './menu.css';

const Menu = () => (
  <div className="react_specialMenu flex_center section_padding" id="menu">
    <div className="react_specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext_cormorant">Today&apos;s Special</h1>
    </div>

    <div className="react_specialMenu-menu">
      <div className="react_specialMenu-menu_wine  flex_center">
        <p className="react_specialMenu-menu_heading">Wine & Beer</p>
        <div className="react_specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="react_specialMenu-menu_img">
        <img src={assets.drinks1} alt="menu_img" />
      </div>

      <div className="react_specialMenu-menu_cocktails  flex_center">
        <p className="react_specialMenu-menu_heading">Cocktails</p>
        <div className="react_specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom_button">View More</button>
    </div>
  </div>
);

export default Menu;
