import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";

import Headshot1 from "../../assets/headshot1.png";
import Headshot2 from "../../assets/headshot2.png";
import Headshot3 from "../../assets/headshot3.png";
import Headshot4 from "../../assets/headshot4.png";

import "./bio.css";

export default function Bio() {
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
      }}
    >
      <Carousel className="bioCarousel">
        <Carousel.Item>
          <h1 className="team">Our Team</h1>
          <Row>
            <Col
              sm={12}
              lg={6}
              xl={4}
              style={{
                width: "15rem",
                margin: "25px",
              }}
            >
              <Card
                style={{
                  width: "15rem",
                }}
              >
                <Card.Img width="100%" src={Headshot1} alt="_____'s headshot" />
                <Card.Body>
                  <Card.Title>Name Goes Here</Card.Title>
                  <Card.Text>
                    Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Curabitur vulputate metus vel lacus
                    efficitur tristique. Praesent porta facilisis consectetur.
                  </Card.Text>
                  {/* <Card.Link href=' '> */}

                  {/* </Card.Link> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              sm={12}
              lg={6}
              xl={4}
              style={{
                width: "15rem",
                margin: "25px",
              }}
            >
              <Card
                style={{
                  width: "15rem",
                }}
              >
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
                    adipiscing elit. Curabitur vulputate metus vel lacus
                    efficitur tristique. Praesent porta facilisis consectetur.
                  </Card.Text>
                  {/* <Card.Link href=' '> */}

                  {/* </Card.Link> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              sm={12}
              lg={6}
              xl={4}
              style={{
                width: "15rem",
                margin: "25px",
              }}
            >
              <Card
                style={{
                  width: "15rem",
                }}
              >
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
                    adipiscing elit. Curabitur vulputate metus vel lacus
                    efficitur tristique. Praesent porta facilisis consectetur.
                  </Card.Text>
                  {/* <Card.Link href=' '> */}

                  {/* </Card.Link> */}
                </Card.Body>
              </Card>
            </Col>

            <Col
              sm={12}
              lg={6}
              xl={4}
              style={{
                width: "15rem",
                margin: "25px",
              }}
            >
              <Card
                style={{
                  width: "15rem",
                }}
              >
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
                    adipiscing elit. Curabitur vulputate metus vel lacus
                    efficitur tristique. Praesent porta facilisis consectetur.
                  </Card.Text>
                  {/* <Card.Link href=' '> */}

                  {/* </Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Card
          // style={{
          //   width: "15rem",
          // }}
          >
            {/* <CardImg
                top
                width="100%"
                src={Headshot3}
                alt="_____'s headshot"
              /> */}
            <Card.Body>
              <h1>About Us</h1>
              <h4> **Maybe throw a picture in here to the side</h4>
              <Card.Text className="aboutTeam">
                Team Bio Goes Here. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque ante justo, pretium sed molestie
                et, venenatis at tellus. Nam vitae condimentum justo, et viverra
                augue. Vestibulum imperdiet interdum felis, ac bibendum sapien
                maximus ac. Etiam scelerisque facilisis augue a consectetur.
                Etiam a felis hendrerit, condimentum risus id, lobortis libero.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae;
                <br />
                <br />
                Pellentesque interdum ut eros vitae aliquam. Morbi non molestie
                libero. Pellentesque a massa nibh. Vestibulum in felis ac est
                blandit ultricies eu non ex. Pellentesque at lectus eget est
                dignissim consequat ac eu arcu. Donec eget semper nunc, sit amet
                rutrum nulla. Proin volutpat congue lectus et fringilla. Nullam
                vel justo sapien. Phasellus ac ipsum et lorem porttitor
                fermentum. Cras diam lorem, malesuada convallis lectus eu,
                rutrum volutpat neque. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque vulputate volutpat tortor nec
                tempus. Mauris eleifend dolor sed euismod fringilla. Nullam ut
                vestibulum augue, ut congue massa.
              </Card.Text>
              {/* <Card.Link href=' '> */}

              {/* </Card.Link> */}
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
