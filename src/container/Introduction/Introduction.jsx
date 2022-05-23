import React from 'react';
import './introduction.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { burger } from '../../material';

const Introduction = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="react_video">
      <video
        ref={vidRef}
        src={burger}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="react_video-overlay flex_center">
        <div
          className="react_video-overlay_circle flex_center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
