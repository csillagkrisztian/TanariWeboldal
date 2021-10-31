import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function EditorControl({
  name,
  startLabel,
  endLabel,
  type,

  value,
  setValue,
}) {
  const [number, setNumber] = useState(value);
  const min = number - 100;
  const max = number + 100;

  return (
    <Row>
      <Col style={{ margin: "20px", color: "white" }}>{name}</Col>
      <Col>
        <label>{startLabel}</label>
        <input
          style={{ margin: "20px" }}
          type={type}
          min={min}
          max={max}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <label>{endLabel}</label>
      </Col>
    </Row>
  );
}
