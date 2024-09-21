import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  return (
    <div id="contact-section" style={{ padding: "50px 0" }}>
      <Container className="mb-5">
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-2"
              style={{
                background: "#f9f9ff",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h2 className="mb-3">Meet Us</h2>
              <div className="d-flex flex-column">
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "16px",
                    wordWrap: "break-word",
                  }}
                >
                  <RiWhatsappFill
                    style={{ fontSize: "30px", marginRight: "10px" }}
                  />
                  +91 9791845198
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                  }}
                >
                  <MdEmail style={{ fontSize: "30px", marginRight: "10px" }} />
                  cybersoftdigitalmedia@gmail.com
                </p>
                <h3>Location</h3>
                <p
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "14px",
                    wordWrap: "break-word",
                  }}
                >
                  Cybersoft Digital Media Pvt Ltd No D82, EB COLONY,
                  Mayiladuthurai road, Thiruvarur 610002
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-2"
              style={{
                background: "#fff",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Talk To Us
              </h3>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <p style={{ fontSize: "16px" }}>
                    Hello, my name is
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="name"
                      style={{
                        display: "inline-block",
                        width: "150px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "25px",
                        border: "1px solid #ccc",
                        padding: "8px 12px",
                      }}
                    />
                    and my email address is
                    <Form.Control
                      className="mb-2"
                      type="email"
                      placeholder="email"
                      style={{
                        display: "inline-block",
                        width: "200px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "25px",
                        border: "1px solid #ccc",
                        padding: "8px 12px",
                      }}
                    />
                    I am From
                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="City"
                      style={{
                        display: "inline-block",
                        width: "200px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "25px",
                        border: "1px solid #ccc",
                        padding: "8px 12px",
                      }}
                    />
                    and I would like to chat about
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Message"
                      style={{
                        display: "block",
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "20px",
                        borderRadius: "15px",
                        border: "1px solid #ccc",
                        padding: "10px",
                      }}
                    />
                  </p>
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="your_site_key"
                  ></div>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#1e40af",
                      border: "none",
                      borderRadius: "25px",
                      padding: "10px 30px",
                      fontSize: "16px",
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
