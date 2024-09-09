import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientLogo } from "../data";

function ClientLogoImg() {
  const settings = {
    dots: false,
    arrows: false, // Disable next and previous buttons
    infinite: true,
    speed: 3000, // Increased speed for continuous effect
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous sliding without pause
    cssEase: "linear", // Linear easing for smooth continuous scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div
      className="container py-4 client-logo mt-5"
      style={{
        background: "white",
        borderRadius: "50px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 className="text-center mb-4" style={{ fontSize: "18px" }}>
        AWESOME COMPANIES WE WORK WITH
      </h2>
      <Slider {...settings} className="text-center">
        {clientLogo.map((logo, index) => (
          <div key={index} className="d-flex justify-content-center p-3">
            <img
              src={logo.src}
              alt={logo.alt}
              className="img-fluid"
              style={{ maxHeight: "100px", maxWidth: "130px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ClientLogoImg;
