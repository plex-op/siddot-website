import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-light py-5 footer-back" id="footer">
      <Container>
        <Row className="">
          <Col md={6} className="text-center text-md-start"></Col>
          <Col md={3} className="text-start text-md-start d-none d-md-block">
            <h5 className="" style={{ color: "white" }}>
              NAVIGATION
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="text-start text-md-start">
            <h5 className="" style={{ color: "white" }}>
              OTHERS
            </h5>
            <ul className="list-unstyled fs-6">
              <li className="d-flex align-items-center">
                <a href="">Contact Us</a>
              </li>
              <li className="d-flex align-items-center">
                <a href="">Privacy Policy</a>
              </li>
            </ul>
            <p className="mt-4" style={{ color: "white" }}>
              Providing Creative Ideas for Your Business
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <p style={{ fontSize: "14px", color: "white" }}>
              Copyright © 2024 SidDot
            </p>
            <p style={{ fontSize: "14px", color: "white" }}>
              Powered by{" "}
              <a
                href="https://madads.co"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Madads
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <img src="img/footer-bg-img.png" alt="" className="footer-img" />
    </footer>
  );
};

export default Footer;
