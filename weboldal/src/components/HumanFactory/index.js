import React from "react";

import HumanEditor from "./Editor/HumanEditor";

export default function HumanFactory() {
  const human1 = {
    mouthPosition: 200,
    headPosition: 0,
    eyesColor: "black",
    skinColor: "brown",
    nosePosition: { top: 160 },
    eyePosition: {
      top: 160,
    },
    lipColor: "#29c27a",
    earPositions: {
      left: {
        top: 240,
        left: 55,
        transform: "scale(-5,5)",
      },
      right: {
        transform: "scale(5,5)",
        top: 240,
        left: 500,
      },
    },
    toothPositions: {
      leftTooth: { top: 360, left: 230 },
      middleTooth: { top: 360, left: 270 },
      rightTooth: { top: 360, left: 310 },
    },
    toothColor: "blue",
  };
  const human2 = {
    mouthPosition: 1000,
    headPosition: 800,
    eyesColor: "blue",
    skinColor: "green",
    nosePosition: { top: 970 },
    eyePosition: {
      top: 970,
    },
    lipColor: "#29c27a",
    earPositions: {
      left: {
        top: 1050,
        left: 55,
        transform: "scale(-5,5)",
      },
      right: {
        transform: "scale(5,5)",
        top: 1050,
        left: 500,
      },
    },
    toothPositions: {
      leftTooth: { top: 1160, left: 230 },
      middleTooth: {},
      rightTooth: { top: 1160, left: 310 },
    },
    toothColor: "blue",
  };

  return (
    <div>
      <HumanEditor human={human1} />
      <HumanEditor human={human2} />
    </div>
  );
}
