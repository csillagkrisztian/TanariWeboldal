import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
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
import HappyBirthday from "./components/HappyBirthday";

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

  const szulinaposok = [
    { id: "1", name: "Aco", birthday: "24" },
    { id: "2", name: "Bibi", birthday: "71" },
    { id: "3", name: "Aco", birthday: "2" },
    { id: "4", name: "Borisz", birthday: "30" },
  ];

  const HomePage = () => {
    return <h1> HOME! </h1>;
  };

  const Birthdays = () => {
    return (
      <div>
        {szulinaposok.map((szulinapos) => {
          return (
            <Link to={`/birthdays/${szulinapos.id}`}>
              <p>{szulinapos.name}</p>
            </Link>
          );
        })}
      </div>
    );
  };

  const Human = () => {
    const param = useParams();
    const human = szulinaposok.find((szulinapos) => param.id === szulinapos.id);
    return (
      <div>
        <p>NAME IS: {human.name} </p>
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/birthdays/:id"}>
            <Human></Human>
          </Route>
          <Route path={"/birthdays"}>
            <Birthdays></Birthdays>
          </Route>
          <Route path={"/"}>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>

      {/*{szulinaposok.map((szulinapos) => {
        return (
          <HappyBirthday
            name={szulinapos.name}
            birthday={szulinapos.birthday}
          ></HappyBirthday>
        );
      })}*/}

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
