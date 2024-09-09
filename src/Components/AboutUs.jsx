import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { aboutCards } from "../data";

function AboutUs() {
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
              fontSize: "3.375rem",
              maxWidth: "580px",
              margin: "0 auto",
              marginBottom: "1rem",
            }}
          >
            This is How We Get <span>Things Done</span>
          </Card.Text>
          <Card.Text
            as="p"
            style={{
              fontWeight: "500",
              fontSize: "1.1rem",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            We work with the most innovative companies, adding a fresh approach
            to the hiring strategy. Building and scaling teams? That's what we
            do best!
          </Card.Text>
        </div>
        <Row>
          {aboutCards.map((data, index) => (
            <Col
              key={index}
              md={4}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 50px -8px rgba(125, 125, 125, 0.25)", // Optional box shadow for a3D effect
                  outline: "none",
                  border: "none",
                }}
              >
                <Card.Body>
                  <img
                    src={data.src}
                    alt={data.imgAlt}
                    className="img-fluid mb-3" // You can adjust the class for styling, e.g. margin-bottom
                    style={{ maxWidth: "100px", height: "auto" }} // Optional inline styling for responsiveness
                  />
                  <Card.Title
                    as="h3"
                    style={{ fontSize: "24px", fontWeight: "700" }}
                  >
                    {data.title}
                  </Card.Title>
                  <Card.Text
                    as="p"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    {data.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
