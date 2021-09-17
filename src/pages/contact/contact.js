import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

import Instagram from '../../assets/instagram.png';
import Spotify from "../../assets/spotify.png";
import Twitter from "../../assets/twitter.png";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Row className = 'smRow'>
        <h3 className="connectWithUs">Connect With Us</h3>
        <Col sm={0} lg={3} xl={4}></Col>
        <Col sm={12} lg={6} xl={4}>
          <img
            className="instagram"
            src={Instagram}
            alt="instagram"
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "60px",
              marginRight: "95px",
            }}
          ></img>
          <img
            className="spotify"
            src={Spotify}
            alt="spotify"
            style={{
              width: "60px",
              height: "60px",
            }}
          ></img>
          <img
            className="twitter"
            src={Twitter}
            alt="twitter"
            style={{
              width: "60px",
              height: "60px",
              marginRight: "60px",
              marginLeft: "95px",
            }}
          ></img>
        </Col>
      </Row>
      <Row className="contactRow">
        <Col sm={0} lg={3} xl={4}></Col>
        <Col sm={12} lg={6} xl={4}>
          <form
            id="contact-form"
            style={{}}
            // onSubmit={this.handleSubmit.bind(this)}
            // method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Col>
        <Col sm={0} lg={3} xl={4}></Col>
      </Row>
    </div>
  );
}
