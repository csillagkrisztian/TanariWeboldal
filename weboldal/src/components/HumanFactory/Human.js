import React from "react";
import Head from "./Head";
import Body from "./Body";

export default function Human({ dna }) {
  return (
    <div>
      <Head
        eyesColor={dna.eyesColor}
        skinColor={dna.skinColor}
        lipColor={dna.lipColor}
        eyePosition={dna.eyePosition}
        earPositions={dna.earPositions}
      ></Head>
      <Body></Body>
    </div>
  );
}
