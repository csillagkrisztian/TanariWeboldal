import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Nav, Navbar, Card, Button } from "react-bootstrap";

export default function Pokemon({ name, url }) {
  console.log("adatbázis", url);
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setPokemon(result.data);
    };
    fetchData();
  }, []);

  if (!pokemon) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }

  console.log(pokemon, "pokemon");
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
