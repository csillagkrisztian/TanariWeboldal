import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Country.css";
import { Card, Row, Col, Container, Button, CardGroup } from "react-bootstrap";

export default function CountryFlag({ flag, name }) {
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
    },
  };
  const noImg =
    "https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg";
  return (
    <div>
      <Container fluid className="text-center">
        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row className="row">
              <Col>
                <Card.Img src={!flag ? noImg : flag} />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title as="h1">{name}</Card.Title>
                  <Card.Text as="h4">dsadsadas</Card.Text>
                </Card.Body>
                <Button href={""}>Read More</Button>
              </Col>
            </Row>
          </Card>{" "}
        </CardGroup>
      </Container>
    </div>
  );
}
