import React from "react";
import { ReactComponent as EyeSvg } from "../../images/eye.svg";

export default function Eye({ color, eyePosition, eyeTopPostion }) {
  return (
    <div>
      <EyeSvg
        fill={color}
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          top: eyeTopPostion,
          left: eyePosition,
        }}
      ></EyeSvg>
    </div>
  );
}
