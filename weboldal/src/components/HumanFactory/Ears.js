import React from "react";
import Ear from "./Ear";

export default function Ears({
  earPositions,
  skinColor,
  earLeftPosition,
  earRightPosition,
  earLeftVerticalPosition,
  earRightVerticalPosition,
}) {
  return (
    <div>
      <Ear
        position={earPositions.left}
        skinColor={skinColor}
        horizontalPosition={earLeftPosition}
        verticalPosition={earLeftVerticalPosition}
      ></Ear>
      <Ear
        position={earPositions.right}
        skinColor={skinColor}
        horizontalPosition={earRightPosition}
        verticalPosition={earRightVerticalPosition}
      ></Ear>
    </div>
  );
}
