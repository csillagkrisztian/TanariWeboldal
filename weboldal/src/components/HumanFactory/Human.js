import React from "react";
import Head from "./Head";
import Body from "./Body";

export default function Human({
  dna,
  eyePosition,
  lipColor,
  skinColor,
  nosePosition,
  earLeftPosition,
  earRightPosition,
  earLeftVerticalPosition,
  earRightVerticalPosition,
  toothColor,
}) {
  console.log("déenes", dna);
  return (
    <div>
      <Head
        toothPositions={dna.toothPositions}
        mouthPosition={dna.mouthPosition}
        headPosition={dna.headPosition}
        eyesColor={dna.eyesColor}
        skinColor={skinColor}
        lipColor={lipColor}
        eyePosition={eyePosition}
        earPositions={dna.earPositions}
        nosePosition={nosePosition}
        earLeftPosition={earLeftPosition}
        earRightPosition={earRightPosition}
        earLeftVerticalPosition={earLeftVerticalPosition}
        earRightVerticalPosition={earRightVerticalPosition}
        toothColor={toothColor}
      ></Head>
      <Body></Body>
    </div>
  );
}
