import React from "react";
import { Container } from "react-bootstrap";

export const ServicesHeading = () => {
  return (
    <Container className="mt-5 vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center mb-5 services-heading">
        <span
          style={{
            fontSize: "1.5rem",
            letterSpacing: ".8px",
            marginBottom: "1.5rem",
          }}
        >
          OUR SERVICES
        </span>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "3.375rem",
            maxWidth: "580px",
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        >
          For Every Problem, <span>There's a Solution</span>
        </h2>
        <p
          style={{
            fontWeight: "500",
            fontSize: "1.1rem",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          Our services are tailor-made to your needs, aligning our strategy with
          your requirements.
        </p>
      </div>
    </Container>
  );
};
