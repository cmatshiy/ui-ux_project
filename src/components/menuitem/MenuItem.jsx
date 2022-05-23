import React from 'react';
import './menuitem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="react_menuitem">
    <div className="react_menuitem-head">
      <div className="react_menuitem-name">
        <p className="p_cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="react_menuitem-dash" />
      <div className="react_menuitem-price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>

    <div className="react_menuitem-sub">
      <p className="p_opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
