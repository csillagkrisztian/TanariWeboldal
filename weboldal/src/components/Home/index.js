import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/kisspng-physician-medicine-computer-icons-hospital-health-cropped-icon-png-physician-senior-services-5d05236ae760a0.7278499315606178349477.png";
import doctor from "../../images/doctor.png";
import hospital from "../../images/hospital (1).png";
import heart from "../../images/heart.png";
import { Link } from "react-router-dom";

export default function Home() {
  const lo = "Bácska Hospital Service";
  const lo1 = "Welcome to...";
  return (
    <div>
      <Container fluid="true" className="justify-content mt-4">
        <Row>
          <Col>
            <h4 style={{ opacity: "0.4", marginLeft: "12vh" }}>{lo1}</h4>
            <img
              style={{ height: "200px", display: "block", margin: "auto" }}
              src={logo}
            ></img>
            <h1 className="text-center font-weight-bold">{lo} </h1>
          </Col>
        </Row>
        <Row>
          <h3
            style={{ opacity: "0.8", textAlign: "center", marginTop: "60px" }}
          >
            "How can we help today?"
          </h3>
          <img
            style={{ width: "400px", margin: "auto", marginTop: "16px" }}
            src={doctor}
          ></img>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col
            style={{
              marginTop: "40px",
              marginLeft: "32px",
              marginRight: "16px",
              border: "solid 1px #e7f4f4",
              borderRadius: "15%",
              marginBottom: "60px",
              boxShadow: "0px 2px #e7f4f4",
            }}
          >
            <Link to={"/hospitals"}>
              <h2
                style={{
                  opacity: "0.6",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                "Looking for a hospital."
              </h2>
              <img
                style={{ display: "block", margin: "auto" }}
                src={heart}
              ></img>
            </Link>
          </Col>
          <Col
            style={{
              marginTop: "40px",
              marginLeft: "16px",
              marginRight: "32px",
              border: "solid 1px #e7f4f4",
              borderRadius: "15%",
              marginBottom: "60px",
              boxShadow: "0px 2px #e7f4f4",
            }}
          >
            <Link to={"/about"}>
              <h2
                style={{
                  opacity: "0.6",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                "Tell me about your service."
              </h2>
              <img
                style={{ display: "block", margin: "auto" }}
                src={hospital}
              ></img>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
