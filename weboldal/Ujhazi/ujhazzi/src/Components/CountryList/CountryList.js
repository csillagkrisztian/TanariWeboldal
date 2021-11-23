import React from "react";
import useFetch from "../useFetch";
import CountryFlag from "./Country";
import "./CountryList.css";

export default function CountryList() {
  const { database: countries } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  if (!countries) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Countries of the World</h1>
      {countries.map((countryData) => {
        return (
          <>
            <CountryFlag
              name={countryData.name.official}
              flag={countryData.coatOfArms.svg}
            />{" "}
          </>
        );
      })}{" "}
    </div>
  );
}
