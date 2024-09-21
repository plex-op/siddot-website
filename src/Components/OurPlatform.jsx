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

      if (sectionPosition < screenHeight && sectionPosition > 0) {
        setBgColor("#f0f0f0");
      } else {
        setBgColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="platform-section"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
        width: "100%",
      }}
    >
      <Container className="mb-5 gap-10">
        {OurPlatformData.map((data, index) => (
          <Row key={index} className="mb-5">
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
                className="services-card"
              >
                <Card.Body className="d-flex flex-column flex-md-row align-items-center">
                  {/* Image Col - Positioned based on screen size */}
                  <Col
                    xs={12}
                    md={3}
                    className="d-flex justify-content-center mb-3 mb-md-0 order-xs-1 order-md-2"
                  >
                    <img src={data.src} alt="" width={"200px"} />
                  </Col>

                  {/* Content Col - Positioned based on screen size */}
                  <Col xs={12} md={9} className="order-xs-2 order-md-1">
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ fontSize: "16px", fontWeight: "600" }}
                    >
                      {data.subTitle}
                    </Card.Subtitle>
                    <Card.Title style={{ fontWeight: "800" }}>
                      {data.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        textAlign: "justify",
                      }}
                    >
                      {data.description}
                    </Card.Text>
                    <Card.Link href="#" className="service-btn">
                      Card Link
                    </Card.Link>
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
