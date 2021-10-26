import React from "react";
import { ReactComponent as NoseSvg } from "../../images/nose.svg";

export default function Nose() {
  return (
    <div>
      <NoseSvg
        style={{
          height: "400px",
          position: "absolute",
          top: "150",
          left: "180",
        }}
      ></NoseSvg>
    </div>
  );
}
