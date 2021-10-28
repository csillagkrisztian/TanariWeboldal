import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as BodySvg } from "../../images/body.svg";
import { ReactComponent as ToothSvg } from "../../images/tooth.svg";
import Human from "./Human";

export default function HumanFactory() {
  const human1 = {
    eyesColor: "black",
    skinColor: "brown",
    eyePosition: {
      top: 160,
    },
    lipColor: "green",
    earPositions: {
      left: {
        top: "240",
        left: "55",
        transform: "scale(-5,5)",
      },
      right: {
        transform: "scale(5,5)",
        top: "240",
        left: "500",
      },
    },
  };

  const HumanEditor = () => {
    const [eyePosition, setEyePosition] = useState(human1.eyePosition.top);
    console.log("eyePosition", eyePosition);
    return (
      <div>
        <div
          style={{
            width: "600px",
            height: "400px",
            backgroundColor: "gray",
            margin: "100px",
            marginLeft: "600px",
            marginRight: "50px",
          }}
        >
          <Container>
            <Row>
              <Col style={{ margin: "20px", color: "white" }}>Eye position</Col>
              <Col>
                <label>Up</label>
                <input
                  style={{ margin: "20px" }}
                  type="range"
                  min="30"
                  max="300"
                  value={eyePosition}
                  onChange={(event) => {
                    setEyePosition(event.target.value);
                  }}
                ></input>
                <label>Down</label>
              </Col>
            </Row>
          </Container>
        </div>
        <Human dna={human1} eyePosition={eyePosition}></Human>
      </div>
    );
  };

  return (
    <div>
      <HumanEditor></HumanEditor>
    </div>
  );
}
