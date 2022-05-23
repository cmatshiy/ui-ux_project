import React from 'react';
import { SubHeading } from '../../components';
import { assets, data } from '../../material';
import './laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="react_laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="react_laurels_awards-card_content">
      <p className="p_cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p_opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="react_bg react_wrapper section_padding" id="awards">
    <div className="react_wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext_cormorant">Our Laurels</h1>

      <div className="react_laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.length && award.title} />)}
      </div>
    </div>

    <div className="react_wrapper_img">
      <img src={assets.food3} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
