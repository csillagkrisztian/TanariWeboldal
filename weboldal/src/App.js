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

export default function App() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
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
      <NavBar />

      <Router>
        <Switch>
          <Route path="/randomdrink/">
            <RandomDrink />
          </Route>
          <Route path="/drinklist">
            <DrinkList />
          </Route>
          <Route path="/">
            <Home database={database} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
