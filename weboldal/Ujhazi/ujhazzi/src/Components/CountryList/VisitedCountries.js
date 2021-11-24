import React from "react";
import axios from "axios";
import Box from "./Box";
import { useState, useEffect } from "react";

export default function VisitedCountries({ noImg }) {
  const linkID = ["german", "english", "spanish"];
  const [database, setDatabase] = useState();
  const fetchData = async (id) =>
    axios.get(`https://restcountries.com/v3.1/lang/${id}`);
  useEffect(() => {
    Promise.all(linkID.map((e) => fetchData(e))).then((values) => {
      setDatabase(values.map((response) => response.data));
    });
  }, []);

  if (!database) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  const idemoarray = [].concat(database[0], database[1], database[2]);

  const idemoidemo = idemoarray.map((countryname) => {
    return countryname.name.official;
  });

  console.log(idemoidemo);

  return (
    <div>
      <h1>Countries I Visited</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {idemoarray.map((countryData) => {
          return (
            <>
              {" "}
              <Box
                noImg={noImg}
                name={countryData.name.official}
                flag={countryData.coatOfArms.svg}
              />{" "}
            </>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}
