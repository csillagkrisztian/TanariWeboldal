import React from "react";
import Tooth from "./Tooth";

export default function Teeth({ teethPosition }) {
  return (
    <div>
      <Tooth position={teethPosition.left} />
      <Tooth position={teethPosition.middle} />
      <Tooth position={teethPosition.right} />
    </div>
  );
}
