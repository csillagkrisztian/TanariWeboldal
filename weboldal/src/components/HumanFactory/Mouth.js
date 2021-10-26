import React from "react";
import { ReactComponent as MouthSvg } from "../../images/mouth.svg";

export default function Mouth({ lipColor, position }) {
  return (
    <div>
      <MouthSvg
        fill={lipColor}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          height: position.height,
        }}
      ></MouthSvg>
    </div>
  );
}
