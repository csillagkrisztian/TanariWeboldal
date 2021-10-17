import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pills from "../../images/pills.png";

export default function Hospitals({ hospitals }) {
  console.log("hospitals", hospitals);
  return (
    <div>
      <h4 style={{ opacity: "0.4", marginLeft: "12vh", marginTop: "50px" }}>
        {"We got the best hospitals the balkan can offer..."}
      </h4>
      <Container fluid="true" className="justify-content mt-4">
        <Row>
          <Col>
            <p style={{ margin: "50px" }}>
              {
                '"We offer only the most pristine cleanliness, the highest educated staff and the most caring and inspiring doctors that you have ever spoken to. If you are not satisfied I will personally pay for your medical expenses..."'
              }
            </p>
            <p style={{ margin: "50px" }}>{"Dr. Prof. Zdravko Csólity"}</p>
          </Col>
          <Col>
            <img
              style={{ width: "400px", margin: "65px auto", display: "block" }}
              src={pills}
            ></img>
          </Col>
        </Row>
        <Row>
          {hospitals.map((hospital) => {
            return (
              <Col>
                <Link to={`/hospitals/${hospital.id}`}>
                  <h2
                    style={{
                      marginLeft: "16px",
                      textDecoration: "none",
                    }}
                  >
                    {hospital.nev}
                  </h2>
                  <img
                    style={{
                      width: "500px",
                      height: "400px",
                      margin: "auto",
                      marginTop: "16px",
                      objectFit: "cover",
                      display: "block",
                      marginBottom: "60px",
                    }}
                    src={hospital.kep}
                  ></img>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
