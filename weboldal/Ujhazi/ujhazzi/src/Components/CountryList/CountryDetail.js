import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./CountryDetail.css";
import { Button } from "react-bootstrap";

export default function CountryDetail({ countries }) {
  const params = useParams();
  const country = countries.find(
    (countryData) => params.name === countryData.name.official
  );
  const [database, setDatabase] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://restcountries.com/v3.1/name/${country.name.official}`
      );
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!database) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Button className="but" href="/">
        Home
      </Button>{" "}
      <h1> {database[0].name.official}</h1>
      <img className="k" src={database[0].coatOfArms.svg} />
      <h3 className="firsth3 ">Details:</h3>
      <p className="firstP f1">Capital: {database[0].capital} </p>
      <p className="secondP f1">Continent: {database[0].continents}</p>
      <p className="thirdP f1">Region: {database[0].region}</p>
      <p className="fourthP f1">Start Of Week: {database[0].startOfWeek}</p>
    </div>
  );
}
