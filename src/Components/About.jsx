import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { aboutData } from "../data.jsx";

function About() {
  const [bgColor, setBgColor] = useState("white"); // Default background color

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const sectionPosition = aboutSection.getBoundingClientRect().top; // Get the section position
      const screenHeight = window.innerHeight;

      // Change background color if the user scrolls to a certain point (e.g., when section is visible)
      if (sectionPosition < screenHeight / 2) {
        setBgColor("#f0f0f0"); // Change to desired color
      } else {
        setBgColor("white"); // Revert to default
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about-section"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
        padding: "10px",
      }}
    >
      <Container className="mt-5">
        <div className="text-center mb-5 home-heading">
          <Card.Text
            as="span"
            style={{
              fontSize: "1.5rem",
              letterSpacing: ".8px",
              marginBottom: "1.5rem",
            }}
          >
            WHY HYRE
          </Card.Text>
          <Card.Text
            as="h2"
            style={{
              fontWeight: "800",
              fontSize: "2rem",
              maxWidth: "580px",
              margin: "0 auto",
              marginBottom: "1rem",
            }}
          >
            This is How We Get Things Done
          </Card.Text>
        </div>
        <Row>
          {aboutData.map((data, index) => (
            <React.Fragment key={index}>
              <Col
                md={6}
                className="mb-4 d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {data.title}
                  </h2>
                  <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
                    {data.description}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    style={{ borderRadius: "5px" }}
                  >
                    Know More
                  </button>
                </div>
              </Col>
              <Col
                md={6}
                className="mb-4 d-flex justify-content-center align-items-center"
              >
                <img
                  src={data.src}
                  alt={data.title}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;
