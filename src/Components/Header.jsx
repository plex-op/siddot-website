import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Header() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.screenY > 50) {
      setNavbarColor("black");
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
              fontFamily: "kreadon-extrabold",
            }}
            className="navbar-content nav-bar-section"
          >
            {/* <img src="" alt="" /> */}
            Logo
            <span style={{ color: "#ff7b00", fontFamily: "kreadon-bold" }}>
              IMG
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: "white",
              filter: "invert(1)",
              background: "transparent",
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
            // style={{ backgroundColor: "black" }}
          >
            <Offcanvas.Header closeButton style={{ filter: "invert(1)" }}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" style={{ color: "" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "" }}>
                  Services
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "" }}>
                  About
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "" }}>
                  Our Works
                </Nav.Link>
                <Nav.Link href="#footer" style={{ color: "" }}>
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
