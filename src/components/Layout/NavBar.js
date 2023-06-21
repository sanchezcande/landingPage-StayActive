import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css';
import logo from './Logo.png';

function ColorSchemesExample() {
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  const handleNavItemClick = () => {
    setShowSubNavbar((prevShowSubNavbar) => !prevShowSubNavbar);
  };

  return (
    <>
      <Navbar bg="black" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/" onClick={handleNavItemClick}>
            <img className={classes.logo} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleNavItemClick}>La Aplicación</Nav.Link>
              <Nav.Link href="faqs">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        bg="black"
        variant="dark"
        expand="md"
        className={showSubNavbar ? classes.showNavbar : classes.hideNavbar}
      >
        <Container>
          <div className={classes.navBaja}>
            <Nav className="me-auto">
              <Nav.Link href="#jugadores">Jugadores</Nav.Link>
              <Nav.Link href="#clubes">Clubes</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
