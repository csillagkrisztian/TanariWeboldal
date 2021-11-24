import React from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";

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

  return (
    <div>
      {" "}
      <h1> {countryData[0].name.official}</h1>
    </div>
  );
}
