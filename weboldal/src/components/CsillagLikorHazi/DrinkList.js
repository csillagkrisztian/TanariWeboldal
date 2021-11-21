import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import axios from "axios";
import Drink from "./Drink";

export default function DrinkList({ drinkID }) {
  const [database, setDatabase] = useState([]);
  const fetchData = async (id) =>
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  useEffect(() => {
    Promise.all(drinkID.map((id) => fetchData(id))).then((resolvedValue) => {
      setDatabase(resolvedValue.map((response) => response.data.drinks[0]));
    });
  }, []);

  if (!database.length) {
    return <p>ZZZZZZ</p>;
  }
  console.log(database);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "120px",
      }}
    >
      {database.map((idemo) => {
        return (
          <Drink
            name={idemo.strDrink}
            img={idemo.strDrinkThumb}
            alc={idemo.strAlcoholic}
          ></Drink>
        );
      })}
    </div>
  );
}
