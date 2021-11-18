import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DrinkPicture from "./DrinkPicture";

export default function Home({ database }) {
  console.log(database);

  database.map((drinkPicture) => {
    return;
  });
  return <div></div>;
}
