import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import "./App.css";

export default function App() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000");
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  /*if (!database) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }*/

  return (
    <div className="App">
      <HumanFactory></HumanFactory>
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
  );
}
