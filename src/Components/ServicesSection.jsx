import React from "react";
import { Container } from "react-bootstrap";
import { headingData } from "../data.jsx"; // Importing data from external file
import { ServicesHeading } from "./ServicesHeading"; // Importing your ServicesHeading component

export const ServicesSection = () => {
  return (
    <Container>
      {headingData.map((section, index) => (
        <div key={index}>
          {/* Render the heading */}
          <ServicesHeading
            title={section.title}
            main={section.main}
            span={section.span}
            description={section.description}
          />

          {/* Render the corresponding section component */}
          <div>{section.component}</div>
        </div>
      ))}
    </Container>
  );
};
