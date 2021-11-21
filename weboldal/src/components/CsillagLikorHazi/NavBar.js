import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav.Link href="/">Rom Kocsma</Nav.Link>
        <Container className="justify-content-center">
          <Nav.Link href="drinklist">Liquores</Nav.Link>
          <Nav.Link href="randomdrink">I'm bored</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}
