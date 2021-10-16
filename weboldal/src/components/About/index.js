import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import doctor from "../../images/doctor.jpg";

export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img style={{ margin: "16px" }} src={doctor}></img>
          </Col>
          <Col
            style={{
              margin: "40px",
            }}
          >
            <p style={{ margin: "50px" }}>
              {
                "\"We here at Bácska Hospital Service have been working hard to make sure that every patient get's what they deserve. Every patient's problem is our problem.\""
              }
            </p>
            <p style={{ margin: "40px", fontSize: "13px" }}>
              {"Dr. Prof. Dragica Vukovich - registered child misuser"}
            </p>
            <p style={{ fontSize: "8px" }}>
              {
                "DISCLAIMER! BHS is not responsible for any misconduct that the doctors may do to patients. We believe in freedom of solving your own issues without our help to empower you further as an individual to grow."
              }
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
