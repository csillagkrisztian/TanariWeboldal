import React from "react";
import "./Home.css";

var ourTeacher = "Csillag Krisztina Porn Teacher Senpai";

export default function Home() {
  return (
    <div>
      <h1>{ourTeacher}</h1>

      <a className="a1" href="/countrylist">
        <img
          src="https://www.universetoday.com/wp-content/uploads/2010/03/Earth-Pacific-Ocean.jpg"
          className="firstImage"
        ></img>
        <p>List of Countries</p>{" "}
      </a>
      <a className="b1" href="visitedcountries">
        <img src="https://thumbs.dreamstime.com/z/travel-to-abroad-enjoy-travelling-items-travelling-items-to-travel-abroad-137085176.jpg"></img>
        <p>Countries I've visited</p>
      </a>
      <a className="c1" href="/teacher">
        <img src="https://lh3.googleusercontent.com/proxy/5YkSbfXkS1mR77989KRS4E2ghJIgXF7xgQRDykgwBd4rQdO97HKBeIoC5HCTtn0uvg8p3TjFqrG5t9J9IUiOrOnaIF8-NDHq1HTNW1lG5DWzVpxqzFPKzv0koNXj" />
        <p>Szexi tanárnéni</p>
      </a>
    </div>
  );
}
