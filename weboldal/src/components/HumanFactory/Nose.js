import React from "react";
import { ReactComponent as NoseSvg } from "../../images/nose.svg";

export default function Nose({ position }) {
  return (
    <div>
      <NoseSvg
        style={{
          position: "absolute",
          height: position.height,
          top: position.top,
          left: position.left,
        }}
      ></NoseSvg>
    </div>
  );
}
