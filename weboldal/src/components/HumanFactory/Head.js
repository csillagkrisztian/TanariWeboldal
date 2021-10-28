import React from "react";
import { ReactComponent as HeadSvg } from "../../images/head.svg";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import Nose from "./Nose";
import Ears from "./Ears";
import Teeth from "./Teeth";

export default function Head({
  eyesColor,
  mouthPosition,
  nosePosition,
  eyePosition,
  lipColor,
  earPositions,
  skinColor,
  teethPosition,
}) {
  return (
    <div>
      <HeadSvg
        fill={skinColor}
        stroke="black"
        style={{
          height: "400px",
          width: "400px",
          margin: "90px",
          position: "absolute",
          left: "0",
          top: "0",
        }}
      ></HeadSvg>
      <Ears earPositions={earPositions} skinColor={skinColor} />
      <Nose position={nosePosition} />
      <Mouth position={mouthPosition} lipColor={lipColor} />
      <Teeth teethPosition={teethPosition} />
      <Eyes eyesColor={eyesColor} eyePosition={eyePosition} />
    </div>
  );
}
