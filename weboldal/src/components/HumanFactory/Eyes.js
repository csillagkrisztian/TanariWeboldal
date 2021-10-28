import React from "react";
import Eye from "./Eye";

export default function Eyes({ eyePosition, eyesColor }) {
  return (
    <div>
      <Eye
        eyeTopPostion={eyePosition}
        eyePosition={300}
        color={eyesColor}
      ></Eye>
      <Eye
        eyeTopPostion={eyePosition}
        eyePosition={180}
        color={eyesColor}
      ></Eye>
    </div>
  );
}
