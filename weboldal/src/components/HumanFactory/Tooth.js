import React from "react";
import { ReactComponent as ToothSvg } from "../../images/tooth.svg";

export default function Tooth({ positions, color }) {
  if (!positions.top && !positions.left) {
    return null;
  }
  return (
    <div>
      <ToothSvg
        fill={color}
        style={{
          height: "80px",
          width: "50px",
          position: "absolute",
          top: positions.top,
          left: positions.left,
        }}
      />
    </div>
  );
}
