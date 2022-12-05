import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {GiDuck} from 'react-icons/gi'
import {Link} from 'gatsby'
import { CloseButton } from 'react-bootstrap';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar collapseOnSelect key={expand} expand={expand} className="mb-3" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#"><GiDuck /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-end flex-grow-1 pe-3">
                  <Link to="/">Home</Link>
                  <Link to="/work">Work</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;