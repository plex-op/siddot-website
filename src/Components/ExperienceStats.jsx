import { Container, Row, Col } from "react-bootstrap";

function ExperienceStats() {
  const statsData = [
    {
      title: "Years of Experience",
      value: "10+",
    },
    {
      title: "Projects Completed",
      value: "250+",
    },
    {
      title: "Clients Served",
      value: "150+",
    },
    {
      title: "Awards Won",
      value: "20+",
    },
  ];

  return (
    <Container>
      <div
        className="container py-4 experience-stats mt-5 mb-5"
        style={{
          background: "white",
          borderRadius: "50px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontSize: "18px" }}>
          OUR ACHIEVEMENTS
        </h2>
        <Row className="text-center">
          {statsData.map((stat, index) => (
            <Col key={index} md={3} sm={6} className="p-3">
              <div>
                <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: "18px" }}>{stat.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ExperienceStats;
