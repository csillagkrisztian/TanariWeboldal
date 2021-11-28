import React from "react";
import { Card, Row, Col, Container, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Teacher.css";

const szöveg =
  "A gyerekeket arról kérdi a tanárnő, mivel foglalkozik a papájuk.";
const szöveg2 = "- Az én apám ügyvéd! - mondja az első kisgyerek.";
const szöveg3 = "- Az én apám orvos, embereket gyógyít! - mondja a második.";
const szöveg4 = "- Az én apám meghalt - mondja Pistike.";
const szöveg5 =
  "- Ezt sajnálattal hallom - mondja a tanárnő. - És mit csinált, mielőtt meghalt volna?";
const szöveg6 =
  "- Először elvörösödött, aztán elkékült, majd összesett a szőnyegen...";

export default function Teacher() {
  return (
    <div>
      <Button className="but" href="/">
        Home
      </Button>
      <Container className="fő">
        <Row>
          <Col className="nev">Csillag Krisztina</Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://st4.depositphotos.com/3584053/20167/i/1600/depositphotos_201674940-stock-photo-confident-and-sexy-teacher-sensual.jpg"
              className="kep"
            />
          </Col>
          <Col className="szoveg">
            {szöveg}
            <br />
            {szöveg2}
            <br />
            {szöveg3}
            <br />
            {szöveg4}
            <br />
            {szöveg5}
            <br />
            {szöveg6}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Card className="card1">Spain</Card>
            <Card className="card2">English</Card>
            <Card className="card3">German</Card>
          </Col>
          <Col className="itt">
            <a className="ott" href="visitedcountries">
              Countries I've visited
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
