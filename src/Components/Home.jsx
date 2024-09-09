import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <section className="home-section" style={{ marginTop: "4rem" }}>
      <Container className="vh-100 d-flex flex-column">
        <Row className="flex-grow-1 align-items-center home-container">
          <Col xs={12} md={8} className="home-content">
            <h1>
              Searching for a Star?
              <span
              // style={{
              //   backgroundImage:
              //     "radial-gradient(circle at 90%, #6d76eb, #53d5e8 25%, #5abde9 47%, #794cec 93%)",
              // }}
              >
                We Got You.
              </span>
            </h1>
            <p>
              Hyre is a digitally-driven recruitment agency that blends in-house
              and agency recruiting know-how to find the perfect fit for your
              team.
            </p>
            <Button variant="primary" className="home-btn">
              Start Your Journey
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <img src="img/square.jpg" alt="" width={"100%"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
