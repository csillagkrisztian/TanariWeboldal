import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

export default function List() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://codaisseur-pokemon-api.herokuapp.com/"
      );
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!database) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {database.map((pokemon) => {
        return <Pokemon url={pokemon.url} name={pokemon.name}></Pokemon>;
      })}
    </div>
  );
}
