import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Country.css";
import { Card, Row, Col, Container, Button, CardGroup } from "react-bootstrap";

export default function Country({ flag, name, noImg }) {
  const styles = {
    card: {
      backgroundColor: "#B7E0F2", //idk how to put in css
      borderRadius: 55,
      padding: "3rem",
    },
  };

  return (
    <div>
      <Container fluid className="text-center">
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row className="row">
              <Col>
                <a href={`/countrydetail${name}`}>
                  {" "}
                  <Card.Img src={!flag ? noImg : flag} />{" "}
                </a>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title as="h1">{name}</Card.Title>
                  <Card.Text as="h4">dsadsadas</Card.Text>
                </Card.Body>
                <Button href={`/countrydetail${name}`}>Read More</Button>
              </Col>
            </Row>
          </Card>{" "}
        </CardGroup>
      </Container>
    </div>
  );
}
