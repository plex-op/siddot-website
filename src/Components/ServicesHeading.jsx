import React from "react";
import { Container } from "react-bootstrap";

export const ServicesHeading = ({ title, main, span, description }) => {
  return (
    <Container className="mt-5  vh-0-md vh-0-sm d-flex justify-content-center align-items-center">
      <div className="text-center mb-5 services-heading">
        <span
          style={{
            fontSize: "1.5rem",
            letterSpacing: ".8px",
            marginBottom: "1.5rem",
          }}
        >
          {title}
        </span>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "2rem",
            maxWidth: "580px",
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        >
          {main}
          {span}
        </h2>
        {/* <p
          style={{
            fontWeight: "500",
            fontSize: "1.1rem",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {description}
        </p> */}
      </div>
    </Container>
  );
};
