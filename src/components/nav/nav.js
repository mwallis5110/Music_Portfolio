import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import "./nav.css";

export default function PageNav() {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="#beats">Beats</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Get In Touch</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
