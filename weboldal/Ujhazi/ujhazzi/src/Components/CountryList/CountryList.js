import React from "react";
import Country from "./Country";
import "./CountryList.css";
import { Button } from "react-bootstrap";

export default function CountryList({ countries, noImg }) {
  return (
    <div>
      <Button className="but" href="/">
        Home
      </Button>
      <h1>Countries of the World</h1>
      {countries.map((countryData) => {
        return (
          <>
            {" "}
            <Country
              noImg={noImg}
              name={countryData.name.official}
              flag={countryData.coatOfArms.svg}
              googleMaps={countryData.maps.googleMaps}
            />{" "}
          </>
        );
      })}{" "}
    </div>
  );
}
