import React from "react";
import Head from "./Head";
import Body from "./Body";

export default function Human({ dna, eyePosition, nosePosition }) {
  return (
    <div>
      <Head
        mouthPosition={dna.mouthPosition}
        noseTopPosition={nosePosition}
        nosePosition={dna.nosePosition}
        teethPosition={dna.teethPosition}
        eyesColor={dna.eyesColor}
        skinColor={dna.skinColor}
        lipColor={dna.lipColor}
        eyePosition={eyePosition}
        earPositions={dna.earPositions}
      ></Head>
      <Body></Body>
    </div>
  );
}
