import React from "react";
import "./Box.css";

export default function Box({ name, noImg, flag }) {
  return (
    <div className="boxDiv">
      {" "}
      <a href={`/countrydetail${name}`}>
        <img src={!flag ? noImg : flag}></img>{" "}
      </a>
      <h3>{name}</h3>
    </div>
  );
}
