import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import "./nav.css";

export default function PageNav() {
  return (
    <Navbar
      className="topNav"
      style={{
        position: "absolute",
        display: "inline-block",
        background: "transparent",
        zIndex: 2,
      }}
    >
      <Container>
        <Nav className="links">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link
            href="#beats"
            style={{ color: "white", paddingRight: "40px" }}
          >
            Beats
          </Nav.Link>
          <Nav.Link
            href="#services"
            style={{ color: "white", paddingRight: "40px" }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#about"
            style={{ color: "white", paddingRight: "40px" }}
          >
            About Us
          </Nav.Link>
          <Nav.Link href="#contact" style={{ color: "white" }}>
            Get In Touch
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
