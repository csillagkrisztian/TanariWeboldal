import React from "react";
import Tooth from "./Tooth";

export default function Teeth({ toothPositions, toothColor }) {
  console.log("fogak", toothPositions.middleTooth.top);
  return (
    <div>
      <Tooth positions={toothPositions.leftTooth} color={toothColor} />
      <Tooth positions={toothPositions.middleTooth} color={toothColor} />
      <Tooth positions={toothPositions.rightTooth} color={toothColor} />
    </div>
  );
}
