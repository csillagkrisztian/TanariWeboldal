import React from "react";
import "./Home.css";

var ourTeacher = "Csillag Krisztina Porn Teacher Senpai";

export default function Home() {
  return (
    <div className="d1">
      <h1>{ourTeacher}</h1>

      <a className="a1" href="/countrylist">
        <img
          src="https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg"
          className="firstImage"
        ></img>
        <p className="p1">List of Countries</p>{" "}
      </a>
      <a className="b1" href="visitedcountries">
        <img src="https://thumbs.dreamstime.com/z/travel-to-abroad-enjoy-travelling-items-travelling-items-to-travel-abroad-137085176.jpg"></img>
        <p className="p2">Countries I've visited</p>
      </a>
      <a className="c1" href="/teacher">
        <img src="https://lh3.googleusercontent.com/proxy/9bBjbSPdtmXG1uEWrnB-GIWe2ZpemG59me2TuUnUpuPYk2PJE8P78Y4XEpgtr6r2gYWNbDEzkTTux2AoqAllwwdwigRLukf7Z8NE7JnOGaTl9AZTksipQoYFMw" />
        <p className="p3">Szexi tanárnéni</p>
      </a>
    </div>
  );
}
