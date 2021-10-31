import React from "react";

import HumanEditor from "./Editor/HumanEditor";

export default function HumanFactory() {
  const human1 = {
    mouthPosition: 200,
    headPosition: 0,
    eyesColor: "black",
    nosePosition: {
      height: "400px",
      top: 150,
      left: "180",
    },
    skinColor: "brown",
    nosePosition: { top: 160 },
    eyePosition: {
      top: 190,
    },
    mouthPosition: {
      top: "180",
      left: "210",
      height: "800px",
    },
    teethPosition: {
      left: {
        backgroundColor: "black",
        height: "40px",
        width: "45px",
        top: "360",
        left: "240",
      },
      middle: {
        backgroundColor: "black",
        height: "35px",
        width: "35px",
        top: "360",
        left: "290",
      },
      right: {
        backgroundColor: "black",
        height: "30px",
        width: "33px",
        top: "360",
        left: "330",
      },
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
  };

  return (
    <div>
      <HumanEditor human={human1}></HumanEditor>
      <HumanEditor human={human2} />
    </div>
  );
}
