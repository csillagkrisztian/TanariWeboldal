import React from "react";

export default function HappyBirthday({ name, birthday, premium, cicafiu }) {
  console.log(cicafiu);
  let text = `Boldog ${birthday}.ik szülinapot ${name}!!! `;
  if (premium) {
    text += "TE KIRALY VAGY!";
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
