import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import "./Home.css";

export default function Home({ database }) {
  const drinkImgList = database.map((drinkIMG) => {
    return drinkIMG.strDrinkThumb;
  });

  console.log(database);

  return (
    <div
      style={{
        backgroundImage: `url("https://fastly.4sqi.net/img/general/width960/1530358_yeIb_Zf6lb5gcCVTWlAFPAtXT6okg5L8-9QYNE_U68Q.jpg")`,
        backgroundSize: "auto",
      }}
    >
      <Container>
        <Row className="firstTry">
          <Col style={{ color: "white", borderColor: "black" }} xs={8}>
            <h1> ROM KOCSMA</h1>
            Rom Kocsma has {database.length} drinks to offer at the moment.{" "}
            <br />
            In this pub you can choose whatever you link to drink. <br />I don't
            know what else to write, honestly (:
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  "https://scontent.fbeg10-1.fna.fbcdn.net/v/t1.6435-9/125482754_3875961809082824_6965142187480618367_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CWCxeS6jPkoAX9lLek4&_nc_ht=scontent.fbeg10-1.fna&oh=467201d016a6ad5c40b73bbd99a06e95&oe=61BC26C1"
                }
              />
              <Card.Body>
                <Card.Title>Csillag Krisztián</Card.Title>
                <Card.Text>
                  Went out to The Netherlands to open a pub, lul. All the drinks
                  on him so ggwp.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <a href="/drinklist">
          <h1 style={{ textAlign: "center" }}>Click Here For Moar Liquores</h1>{" "}
        </a>
      </Container>
    </div>
  );
}
