import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home(database) {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}
