import React from "react";

import { ReactComponent as BodySvg } from "../../images/body.svg";
import { ReactComponent as ToothSvg } from "../../images/tooth.svg";
import Human from "./Human";

export default function HumanFactory() {
  const human1 = {
    eyesColor: "black",
    skinColor: "brown",
    eyePosition: {
      top: "160",
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

  const human2 = {
    eyesColor: "black",
    skinColor: "#ECBB9F",
    eyePosition: {
      top: "750",
    },
    lipColor: "red",
    earPositions: {
      left: {
        top: "850",
        left: "55",
        transform: "scale(-5,5)",
      },
      right: {
        transform: "scale(5,5)",
        top: "850",
        left: "500",
      },
    },
  };

  return (
    <div>
      <Human dna={human1}></Human>
      <Human dna={human2}></Human>
    </div>
  );
}
