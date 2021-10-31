import { Container, Row, Col } from "react-bootstrap";
import EditorControl from "./EditorControl";
import React, { useState } from "react";
import Human from "../Human";

export default function HumanEditor({ human }) {
  const [eyePosition, setEyePosition] = useState(human.eyePosition.top);
  const [lipColor, setLipColor] = useState(human.lipColor);
  const [nosePosition, setNosePosition] = useState(human.nosePosition.top);
  const [skinColor, setSkinColor] = useState(human.skinColor);
  const [earLeftPosition, setEarLeftPosition] = useState(
    human.earPositions.left.left
  );
  const [earRightPosition, setEarRightPosition] = useState(
    human.earPositions.right.left
  );
  const [earLeftVerticalPosition, setEarLeftVerticalPosition] = useState(
    human.earPositions.left.top
  );
  const [earRightVerticalPosition, setEarRightVerticalPosition] = useState(
    human.earPositions.right.top
  );
  return (
    <div>
      <div
        style={{
          width: "600px",
          height: "600px",
          backgroundColor: "gray",
          margin: "100px",
          marginLeft: "600px",
          marginRight: "50px",
        }}
      >
        <Container>
          <EditorControl
            name={"Eye Position"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"range"}
            value={eyePosition}
            setValue={setEyePosition}
          />
          <EditorControl
            name={"Lip Color"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"color"}
            value={lipColor}
            setValue={setLipColor}
          />
          <EditorControl
            name={"Nose Position"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"range"}
            value={nosePosition}
            setValue={setNosePosition}
          />
          <EditorControl
            name={"Skin Color"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"color"}
            value={skinColor}
            setValue={setSkinColor}
          />{" "}
          <EditorControl
            name={"Ear Left Horizontal Position"}
            startLabel={"Left"}
            endLabel={"Right"}
            type={"range"}
            value={earLeftPosition}
            setValue={setEarLeftPosition}
          />
          <EditorControl
            name={"Ear Right Horizontal Position"}
            startLabel={"Left"}
            endLabel={"Right"}
            type={"range"}
            value={earRightPosition}
            setValue={setEarRightPosition}
          />
          <EditorControl
            name={"Ear Left Vertical Position"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"range"}
            value={earLeftVerticalPosition}
            setValue={setEarLeftVerticalPosition}
          />
          <EditorControl
            name={"Ear Right Vertical Position"}
            startLabel={"Up"}
            endLabel={"Down"}
            type={"range"}
            value={earRightVerticalPosition}
            setValue={setEarRightVerticalPosition}
          />
        </Container>
      </div>
      <Human
        dna={human}
        eyePosition={eyePosition}
        lipColor={lipColor}
        nosePosition={nosePosition}
        skinColor={skinColor}
        earLeftPosition={earLeftPosition}
        earRightPosition={earRightPosition}
        earLeftVerticalPosition={earLeftVerticalPosition}
        earRightVerticalPosition={earRightVerticalPosition}
      ></Human>
    </div>
  );
}
