import React from "react";
import { ReactComponent as NoseSvg } from "../../images/nose.svg";

export default function Nose({ nosePosition }) {
  return (
    <div>
      <NoseSvg
        style={{
          height: "400px",
          position: "absolute",
          top: nosePosition,
          left: "180",
        }}
      ></NoseSvg>
    </div>
  );
}
