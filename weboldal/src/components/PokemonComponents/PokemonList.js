import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

export default function PokemonList() {
  const [pokemonLista, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://codaisseur-pokemon-api.herokuapp.com/"
      );
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!pokemonLista) {
    return <p>Wait</p>;
  }

  console.log("pokemonlista", pokemonLista);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "120px",
      }}
    >
      {pokemonLista.map((pokemon) => {
        return (
          <Link to={`/list/${pokemon.name}`}>
            {" "}
            <Pokemon url={pokemon.url} name={pokemon.name} />
          </Link>
        );
      })}
    </div>
  );
}
