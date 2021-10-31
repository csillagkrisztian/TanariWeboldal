import React from "react";
import { ReactComponent as EarSvg } from "../../images/ear.svg";

export default function Ear({
  position,
  skinColor,
  horizontalPosition,
  verticalPosition,
}) {
  return (
    <div>
      <EarSvg
        fill={skinColor}
        style={{
          position: "absolute",
          top: verticalPosition,
          left: horizontalPosition,
          transform: position.transform,
        }}
      />
    </div>
  );
}
