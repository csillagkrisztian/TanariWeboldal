import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar, Card, Button } from "react-bootstrap";
import { ReactComponent as Eye } from "./images/eye.svg";
import { ReactComponent as Mouth } from "./images/mouth.svg";
import { ReactComponent as Nose } from "./images/nose.svg";
import { ReactComponent as Head } from "./images/head.svg";
import { ReactComponent as Ear } from "./images/ear.svg";
import { ReactComponent as Body } from "./images/body.svg";
import { ReactComponent as Tooth } from "./images/tooth.svg";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hospitals from "./components/Hospitals";
import Hospital from "./components/Hospital";
import "bootstrap/dist/css/bootstrap.min.css";

import HospitalLogo from "./images/kisspng-physician-medicine-computer-icons-hospital-health-cropped-icon-png-physician-senior-services-5d05236ae760a0.7278499315606178349477.png";
import HumanFactory from "./components/HumanFactory";

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
            PokeBaút
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/list">List</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  const Pokemon = ({ name, url }) => {
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  };

  const Home = () => {
    return <div>Home</div>;
  };

  const About = () => {
    return <div>About</div>;
  };

  const List = () => {
    return (
      <div>
        {database.map((pokemon) => {
          return <Pokemon url={pokemon.url} name={pokemon.name}></Pokemon>;
        })}
      </div>
    );
  };

  console.log("database", database);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div className="App">
        {/*<HumanFactory></HumanFactory>*/}
        {/*<Navbar
        sticky="top"
        style={{ background: "white" }}
        className="border-bottom border-dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Hospital Logo"
              src={HospitalLogo}
              width="60"
              height="60"
            />
            {"Bácska Hospital Service"}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/hospitals">Our hospitals</Nav.Link>
            <Nav.Link href="/about"> About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/geci">
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hospitals/:hospitalId">
            <Hospital hospitals={database}></Hospital>
          </Route>
          <Route path="/hospitals">
            <Hospitals hospitals={database} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>*/}
      </div>
    </Router>
  );
}
