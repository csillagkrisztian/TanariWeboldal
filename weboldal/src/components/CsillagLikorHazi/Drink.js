import React from "react";
import { Card } from "react-bootstrap";

export default function Drink({ name, img, alc }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>{alc}</p>
      </Card.Body>
    </Card>
  );
}
