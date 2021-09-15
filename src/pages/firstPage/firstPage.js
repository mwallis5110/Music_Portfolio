import React from "react";
import ReactPlayer from "react-player";
import MainVid from '../../assets/sample1.mp4';

import "./firstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPageVid">
      <video
        controls
        autostart='true'
        autoPlay
        src={MainVid}
        type="video/mp4"
        width="100%"
        height="100%"
        z-index='-1'
      />
      <div className='logo'>
        <p class='logoText'>Logo</p>
      </div>
    </div>
  );
}
