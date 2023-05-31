import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css'; 
import logo from './Logo.png'

function ColorSchemesExample() {
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  const handleNavItemClick = (href) => {
    if (href === '#home') {
      setShowSubNavbar(true);
    } else {
      setShowSubNavbar(false);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" onClick={() => handleNavItemClick('/')}>
          <img className={classes.logo} src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link eventKey="#home" onClick={() => handleNavItemClick('#home')}>
              La Aplicación
            </Nav.Link>
            <Nav.Link href="quienes-somos" onClick={() => handleNavItemClick('quienes-somos')}>
              Quiénes Somos
            </Nav.Link>
            <Nav.Link href="FAQs" onClick={() => handleNavItemClick('FAQs')}>
              FAQs
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        bg="dark"
        variant="dark"
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
