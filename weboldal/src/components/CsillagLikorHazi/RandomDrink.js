import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function RandomDrink() {
  const [database, setDatabase] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!database) {
    return <p>waitabitplox</p>;
  }

  console.log(database, "DATAbase");

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/265704/pexels-photo-265704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
      }}
    >
      <Container>
        <Row>
          <Col style={{ height: "500px", marginTop: "150px" }}>
            <img
              src={database.drinks[0].strDrinkThumb}
              style={{ height: "500px" }}
            ></img>
          </Col>
          <Col>
            <h1 style={{ color: "white", marginTop: "150px" }}>
              {database.drinks[0].strDrink}
            </h1>
            <p style={{ color: "white" }}>{database.drinks[0].strAlcoholic}</p>{" "}
            <br />{" "}
            <p style={{ color: "white" }}>
              {" "}
              Ingredients: [
              {`${database.drinks[0].strIngredient1}+ 
                ${database.drinks[0].strIngredient2}+${database.drinks[0].strIngredient3}`}{" "}
              ]
            </p>{" "}
            <br />
            <br />
            <br />
            <p style={{ color: "white" }}>
              What you get: {database.drinks[0].strInstructions}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
