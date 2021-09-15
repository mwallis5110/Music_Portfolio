import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import CardImg from 'react-bootstrap/CardImg';


import Headshot1 from '../../assets/headshot1.png';
import Headshot2 from "../../assets/headshot2.png";
import Headshot3 from "../../assets/headshot3.png";
import Headshot4 from "../../assets/headshot4.png";

import './bio.css';

export default function Bio() {
    return (
      <div className='container'>
        <h1 className="team">Our Team</h1>
        <Row>
          <Col sm={12} lg={6} xl={4}>
            <Card style={{ width: "14rem" }}>
              <Card.Img
                width="100%"
                src={Headshot1}
                alt="_____'s headshot"
              />
              <Card.Body>
                <Card.Title>Name Goes Here</Card.Title>
                <Card.Text>
                  Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur vulputate metus vel lacus efficitur
                  tristique. Praesent porta facilisis consectetur. Nunc a mauris
                  sed libero posuere finibus. Morbi ultricies eros eu est
                  pharetra dignissim.
                </Card.Text>
                {/* <Card.Link href=' '> */}

                {/* </Card.Link> */}
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card style={{ width: "14rem" }}>
              <CardImg
                top
                width="100%"
                src={Headshot2}
                alt="_____'s headshot"
              />
              <Card.Body>
                <Card.Title>Name Goes Here</Card.Title>
                <Card.Text>
                  Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur vulputate metus vel lacus efficitur
                  tristique. Praesent porta facilisis consectetur. Nunc a mauris
                  sed libero posuere finibus. Morbi ultricies eros eu est
                  pharetra dignissim.
                </Card.Text>
                {/* <Card.Link href=' '> */}

                {/* </Card.Link> */}
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card style={{ width: "14rem" }}>
              <CardImg
                top
                width="100%"
                src={Headshot3}
                alt="_____'s headshot"
              />
              <Card.Body>
                <Card.Title>Name Goes Here</Card.Title>
                <Card.Text>
                  Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur vulputate metus vel lacus efficitur
                  tristique. Praesent porta facilisis consectetur. Nunc a mauris
                  sed libero posuere finibus. Morbi ultricies eros eu est
                  pharetra dignissim.
                </Card.Text>
                {/* <Card.Link href=' '> */}

                {/* </Card.Link> */}
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card style={{ width: "14rem" }}>
              <CardImg
                top
                width="100%"
                src={Headshot4}
                alt="_____'s headshot"
              />
              <Card.Body>
                <Card.Title>Name Goes Here</Card.Title>
                <Card.Text>
                  Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur vulputate metus vel lacus efficitur
                  tristique. Praesent porta facilisis consectetur. Nunc a mauris
                  sed libero posuere finibus. Morbi ultricies eros eu est
                  pharetra dignissim.
                </Card.Text>
                {/* <Card.Link href=' '> */}

                {/* </Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
}