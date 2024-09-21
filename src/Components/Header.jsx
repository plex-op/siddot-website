import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Header() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Corrected from screenY to scrollY
      setNavbarColor("white");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <Container className="fixed-header">
          <Navbar.Brand
            href="#home"
            style={{
              color: "black",
              fontSize: "30px",
            }}
            className="navbar-content nav-bar-section"
          >
            {/* <img src="" alt="" /> */}
            SID
            <span style={{ color: "#ff7b00" }}>DOT</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: "white",
              filter: "invert(1)",
              background: "white",
              border: "none", // Remove toggle outline
              outline: "none", // Extra measure to ensure no outline
              boxShadow: "none", // Remove focus outline
            }}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ background: "black" }} // Offcanvas background color
          >
            <Offcanvas.Header closeButton style={{ filter: "invert(1)" }}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" style={{ color: "" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#about-section" style={{ color: "" }}>
                  About
                </Nav.Link>
                <Nav.Link href="#service-section" style={{ color: "" }}>
                  Services
                </Nav.Link>
                <Nav.Link href="#platform-section" style={{ color: "" }}>
                  Our Platform
                </Nav.Link>
                <Nav.Link href="#contact-section" style={{ color: "" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
