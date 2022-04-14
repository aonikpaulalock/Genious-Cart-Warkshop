import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-black.png'
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-Background">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" height="30px"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#Services">SERVICES</Nav.Link>
              <Nav.Link href="home#Experts">EXPERTS</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
             {user ? <button className="btn btn-link text-decoration-none text-white"onClick={() => signOut(auth)}>LOGOUT</button>:<Nav.Link eventKey={2} as={Link} to="/login">LOGIN</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;