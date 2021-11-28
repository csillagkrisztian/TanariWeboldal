import React from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import "./CountryDetail.css";
import { Button } from "react-bootstrap";

export default function CountryDetail({ countries }) {
  const params = useParams();
  const country = countries.find(
    (countryData) => params.name === countryData.name.official
  );
  const { database: countryData } = useFetch(
    `https://restcountries.com/v3.1/name/${country.name.official}`
  );

  if (!countryData) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  console.log("yoyo", countryData);
  return (
    <div>
      <Button className="but" href="/">
        Home
      </Button>{" "}
      <h1> {countryData[0].name.official}</h1>
      <img className="k" src={countryData[0].coatOfArms.svg} />
      <h3 className="firsth3 ">Details:</h3>
      <p className="firstP f1">Capital: {countryData[0].capital} </p>
      <p className="secondP f1">Continent: {countryData[0].continents}</p>
      <p className="thirdP f1">Region: {countryData[0].region}</p>
      <p className="fourthP f1">Start Of Week: {countryData[0].startOfWeek}</p>
    </div>
  );
}
