import React from "react";
import { ReactComponent as NoseSvg } from "../../images/nose.svg";

export default function Nose({ position, noseTopPosition }) {
  return (
    <div>
      <NoseSvg
        style={{
          position: "absolute",
          height: position.height,
          top: noseTopPosition,
          left: position.left,
        }}
      ></NoseSvg>
    </div>
  );
}
