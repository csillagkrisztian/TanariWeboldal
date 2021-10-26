import React from "react";
import { ReactComponent as EarSvg } from "../../images/ear.svg";

export default function Ear({ position, skinColor }) {
  return (
    <div>
      <EarSvg
        fill={skinColor}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          transform: position.transform,
        }}
      />
    </div>
  );
}
