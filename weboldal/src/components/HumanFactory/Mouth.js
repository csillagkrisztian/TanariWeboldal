import React from "react";
import { ReactComponent as MouthSvg } from "../../images/mouth.svg";

export default function Mouth({ lipColor }) {
  return (
    <div>
      <MouthSvg
        fill={lipColor}
        style={{
          position: "absolute",
          top: "180",
          left: "210",
          height: "800px",
        }}
      ></MouthSvg>
    </div>
  );
}
