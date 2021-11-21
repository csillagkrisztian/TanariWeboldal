import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/CsillagLikorHazi/Home";
import RandomDrink from "./components/CsillagLikorHazi/RandomDrink";
import DrinkList from "./components/CsillagLikorHazi/DrinkList";
import NavBar from "./components/CsillagLikorHazi/NavBar";
import Kacomaco from "./components/CsillagLikorHazi/Kacomaco";

export default function App() {
  const [database, setDatabase] = useState([]);

  async function fetchData() {
    try {
      const alcoholic = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
      const nonAlcoholic = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );
      setDatabase([...alcoholic.data.drinks, ...nonAlcoholic.data.drinks]);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!database.length) {
    return <p>ZZZZZZ</p>;
  }

  const drinkID = database.map((drinkID) => {
    return drinkID.idDrink;
  });

  return (
    <div>
      <NavBar />

      <Router>
        <Switch>
          <Route path="/randomdrink/">
            <RandomDrink />
          </Route>
          <Route path="/drinklist">
            <DrinkList drinkID={drinkID} />
          </Route>
          <Route path="/">
            <Home database={database} />
          </Route>
          <Route path="/kacomaco">
            <DrinkList drinkID={drinkID} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
