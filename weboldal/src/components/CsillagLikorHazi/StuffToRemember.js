import React from "react";
import { Carousel } from "react-bootstrap";

export default function DrinkingCarousel({ database }) {
  return (
    <div>
      <h1>Database</h1>
      <Carousel interval="1500" wrap="false">
        {database.map((liqour) => (
          <Carousel.Item key={liqour.idDrink}>
            <img
              height="200px"
              width="300px"
              src={liqour.strDrinkThumb}
              alt={liqour.idDrink}
            />
            <Carousel.Caption>
              <h3 color="black">{liqour.idDrink}</h3>
              <p>{liqour.strDrink}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}






















useEffect(() => {
  Promise.all(drinkIds.map((e) => fetchData(e))).then((values) => {
    setDatabase(values);
  });
}, []);



import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DrinkList({ drinkID }) {
  const [database, setDatabase] = useState([]);
  const fetchData = async (id) => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setDatabase((prev) => [...prev, res.data]);
      });
  };
  useEffect(() => {
    drinkID.reduce(async (promise, id) => {
      await promise;
      await fetchData(id);
    }, Promise.resolve());
  }, []);
  console.log(database);

return <div></div>;
}


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

  return <div></div>;
}




