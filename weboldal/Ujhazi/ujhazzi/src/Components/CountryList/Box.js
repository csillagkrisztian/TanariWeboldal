import React from "react";

export default function Box({ name, noImg, flag }) {
  return (
    <div
      style={{
        height: "312px",
        width: "312px",
        backgroundColor: "red",
        border: "black solid 1px",
        margin: "10px",
      }}
    ></div>
  );
}
