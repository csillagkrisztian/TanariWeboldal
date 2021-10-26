import React from "react";
import Ear from "./Ear";

export default function Ears({ earPositions, skinColor }) {
  return (
    <div>
      <Ear position={earPositions.left} skinColor={skinColor}></Ear>
      <Ear position={earPositions.right} skinColor={skinColor}></Ear>
    </div>
  );
}
