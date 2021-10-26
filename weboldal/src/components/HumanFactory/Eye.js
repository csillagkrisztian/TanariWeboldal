import React from "react";
import { ReactComponent as EyeSvg } from "../../images/eye.svg";

export default function Eye({ color, eyeLeftPosition, eyeTopPostion }) {
  return (
    <div>
      <EyeSvg
        fill={color}
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          top: eyeTopPostion,
          left: eyeLeftPosition,
        }}
      ></EyeSvg>
    </div>
  );
}
