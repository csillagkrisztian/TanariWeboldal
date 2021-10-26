import React from "react";
import { ReactComponent as ToothSvg } from "../../images/tooth.svg";

export default function Tooth({ position }) {
  return (
    <div>
      <ToothSvg
        fill={"white"}
        style={{
          position: "absolute",
          backgroundColor: position.backgroundColor,
          height: position.height,
          width: position.width,
          top: position.top,
          left: position.left,
        }}
      ></ToothSvg>
    </div>
  );
}
