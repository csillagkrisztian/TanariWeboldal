import React from "react";

var ourTeacher = "Csillag Krisztián Senpai";

export default function Home() {
  return (
    <div>
      <h1>{ourTeacher}</h1>
      <a className="a1" href="/countrylist">
        <img
          src="https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg"
          className="firstImage"
        ></img>
        <p className="p1">List of Countries</p>{" "}
      </a>
    </div>
  );
}
