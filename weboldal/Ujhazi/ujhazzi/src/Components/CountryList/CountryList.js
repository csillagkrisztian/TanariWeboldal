import React from "react";
import Country from "./Country";
import "./CountryList.css";

export default function CountryList({ countries, noImg }) {
  return (
    <div>
      <h1>Countries of the World</h1>
      {countries.map((countryData) => {
        return (
          <>
            {" "}
            <Country
              noImg={noImg}
              name={countryData.name.official}
              flag={countryData.coatOfArms.svg}
            />{" "}
          </>
        );
      })}{" "}
    </div>
  );
}
