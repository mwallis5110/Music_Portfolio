import React from "react";
// import ReactPlayer from "react-player";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import MainVid from '../../assets/sample1.mp4';
// import Logo from '../../assets/logo.png';

import "./firstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPageVid">
      <video
        controls
        autostart="true"
        autoPlay
        src={MainVid}
        type="video/mp4"
        width="100%"
        // height="100%"
        z-index="-1"
      />
        {/* <Row className="logoDiv">
          <Col sm={12} lg={4}></Col>
          <Col sm={0} lg={4}>
            <img src={Logo} alt="logo"></img>
          </Col>
          <Col sm={12} lg={4}></Col>
        </Row> */}
    </div>
  );
}
