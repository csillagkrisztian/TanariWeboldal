import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function PokemonDetail({ database }) {
  const params = useParams();
  const pokemon = database.find((pokeName) => params.name === pokeName.name);
  const [pokemonEffect, setPokemon] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(pokemon.url);
      setPokemon(result.data);
    };
    fetchData();
  }, []);

  if (!pokemonEffect) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }
  console.log("ide jön a pokemoneffect", pokemonEffect);

  return (
    <div>
      <Container>
        <Row
          style={{
            height: "400px",
          }}
        >
          <Col
            style={{
              fontSize: "60px",
              textAlign: "center",
              paddingTop: "200px",
            }}
          >
            Name: {pokemonEffect.name}
          </Col>
          <Col>
            <img
              src={pokemonEffect.sprites.front_default}
              style={{
                width: "350px",

                height: "450px",
              }}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row
          style={{
            height: "400px",
          }}
        >
          <Col
            style={{
              fontSize: "40px",
              textAlign: "center",
              marginLeft: "-100px",
            }}
          >
            Height: {pokemonEffect.height}
            <br />
            Weight: {pokemonEffect.weight}
          </Col>
          <Col>
            <img
              src={pokemonEffect.sprites.back_default}
              style={{
                width: "350px",

                height: "450px",
                textAlign: "center",
                paddingTop: "0px",
                marginLeft: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
