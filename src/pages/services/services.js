import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Mixing from '../../assets/mixing.png';
// import Recording from "../../assets/recording.png";
import General from "../../assets/general2.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";

export default function Services() {
  return (
    <div className="offerings">
      <h1>Services</h1>
      <Carousel className = 'servicesCarousel'>
        <Carousel.Item>
          <img 
            // className="d-block w-100"
            src={Mixing} 
            //src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mixing Services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={General}
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Vocal Recording</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={General}
            //src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Other Services</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
