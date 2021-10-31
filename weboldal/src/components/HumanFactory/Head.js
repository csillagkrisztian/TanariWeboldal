import React from "react";
import { ReactComponent as HeadSvg } from "../../images/head.svg";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import Nose from "./Nose";
import Ears from "./Ears";

export default function Head({
  eyesColor,
  eyePosition,
  lipColor,
  earPositions,
  skinColor,
  nosePosition,
  earLeftPosition,
  earRightPosition,
  earLeftVerticalPosition,
  earRightVerticalPosition,
  headPosition,
  mouthPosition,
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
          top: headPosition,
        }}
      ></HeadSvg>
      <Ears
        earPositions={earPositions}
        skinColor={skinColor}
        earLeftPosition={earLeftPosition}
        earRightPosition={earRightPosition}
        earLeftVerticalPosition={earLeftVerticalPosition}
        earRightVerticalPosition={earRightVerticalPosition}
      />
      <Nose nosePosition={nosePosition} />
      <Mouth lipColor={lipColor} mouthPosition={mouthPosition} />
      <Eyes eyesColor={eyesColor} eyePosition={eyePosition} />
    </div>
  );
}
