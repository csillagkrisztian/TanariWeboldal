import React from "react";
import Eye from "./Eye";

export default function Eyes({ eyePosition, eyesColor }) {
  return (
    <div>
      <Eye
<<<<<<< HEAD
        eyeTopPostion={eyePosition.top}
        eyeLeftPosition={300}
        color={eyesColor}
      ></Eye>
      <Eye
        eyeTopPostion={eyePosition.top}
        eyeLeftPosition={180}
=======
        eyeTopPostion={eyePosition}
        eyePosition={300}
        color={eyesColor}
      ></Eye>
      <Eye
        eyeTopPostion={eyePosition}
        eyePosition={180}
>>>>>>> 3b87a920cec8605e17983e23ce644d0f67992549
        color={eyesColor}
      ></Eye>
    </div>
  );
}
