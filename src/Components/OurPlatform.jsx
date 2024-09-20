import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { OurPlatformData } from "../data.jsx";

export function OurPlatform() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      // Check if the section is in view (scroll position reached section)
      if (sectionPosition < screenHeight && sectionPosition > 0) {
        setBgColor("#f0f0f0"); // Set background color when in view
      } else {
        setBgColor("white"); // Default background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about-section"
      style={{
        backgroundColor: bgColor, // Apply background color based on scroll
        transition: "background-color 0.3s ease", // Smooth transition for background change
        width: "100%",
        padding: "20px",
      }}
    >
      <Container className="mb-5 gap-10">
        {OurPlatformData.map((data, index) => (
          <Row key={index}>
            <Col xs={12} md={12}>
              <Card
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  padding: "50px",
                  boxShadow: "0px 4px 50px -8px rgba(125, 125, 125, 0.25)",
                  outline: "none",
                  border: "none",
                }}
                className="services-card mb-5"
              >
                <Card.Body className="d-flex align-items-center">
                  <Col md={9}>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ fontSize: "16px", fontWeight: "600" }}
                    >
                      {data.subTitle}
                    </Card.Subtitle>
                    <Card.Title style={{ fontSize: "", fontWeight: "800" }}>
                      {data.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "18px", fontWeight: "400" }}>
                      {data.description}
                    </Card.Text>
                    <Card.Link href="#" className="service-btn">
                      Card Link
                    </Card.Link>
                    {/* <button className="service-btn mt-5">Click Link</button> */}
                  </Col>
                  <Col
                    md={3}
                    className="d-none d-sm-flex justify-content-center align-items-center"
                  >
                    <img src={data.src} alt="" width={"200px"} />
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

// export default OurPlatform;
