import React from "react";
import "./Box.css";

export default function Box({ name, noImg, flag }) {
  return (
    <div
      style={{
        height: "312px",
        width: "312px",
        border: "black solid 1px",
        margin: "10px",
      }}
    >
      {" "}
      <a href={`/countrydetail${name}`}>
        <img src={!flag ? noImg : flag}></img>{" "}
      </a>
      <h3>{name}</h3>
    </div>
  );
}
