import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Patients from "./components/Patients";
import "bootstrap/dist/css/bootstrap.min.css";
import HospitalLogo from "./images/kisspng-physician-medicine-computer-icons-hospital-health-cropped-icon-png-physician-senior-services-5d05236ae760a0.7278499315606178349477.png";

export default function App() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/1");
      setDatabase(result.data);
    };
    setTimeout(fetchData, 4000);
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
    <div className="App">
      <Navbar
        sticky="top"
        style={{ background: "white" }}
        className="border-bottom border-dark"
      >
        <Container>
          <Navbar.Brand>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hospitals">
            <Patients />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
