import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
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
import HumanFactory from "./components/HumanFactory/index";

export default function App() {
  const [text, setText] = useState();
  const [person, setName] = useState();
  const [posts, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000");
      console.log("result", result);
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  async function sendComment(text, person) {
    const result = await axios.post("http://localhost:8000", { text, person });
    setDatabase(result.data);
  }

  if (!posts) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }

  const Comment = ({ person, text }) => {
    return (
      <div
        style={{
          height: "180px",
          width: "320px",
          backgroundColor: "lightblue",
          border: "solid 2px red",
          padding: "30px",
        }}
      >
        <h1>{person}</h1>
        <p>"{text}"</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "gray",
        }}
      >
        <div style={{ padding: "40px" }}>
          <label>Nev:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <label>Irj kommentet:</label>
          <input
            type="text"
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></input>
          <button onClick={() => sendComment(text, person)}>Feltoltes</button>
        </div>

        {posts.map((post) => {
          return <Comment text={post.text} person={post.person}></Comment>;
        })}
      </div>

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
