import React from "react";
import Tracks from '../../assets/tracks.png'
import "./beats.css";

export default function Beats() {
  return (
    <div className='trackList'>
      <h1>Tracks</h1>
      <h4>Image only for demonstration. The actual track list will be from an API call</h4>
      <img src={Tracks} alt='tracks placeholder pic'></img>
    </div>
  );
}
