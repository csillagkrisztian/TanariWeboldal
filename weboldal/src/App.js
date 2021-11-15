import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar, Card, Button } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import Home from "./components/PokemonComponents/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/PokemonComponents/List";
import PokemonList from "./components/PokemonComponents/PokemonList";
import PokemonDetail from "./components/PokemonComponents/PokemonDetail";

export default function App() {
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

  const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://e7.pngegg.com/pngimages/978/632/png-clipart-pokemon-pokemon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PokeBaÃºt
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/list">List</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  console.log("database", database);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/list/:name">
          <PokemonDetail database={database} />
        </Route>
        <Route path="/list">
          <PokemonList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
