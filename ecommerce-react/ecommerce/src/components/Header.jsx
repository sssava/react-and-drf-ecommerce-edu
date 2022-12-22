import React from 'react';

import {Container, Nav, Navbar} from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#">Rooty</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="#action1"><i className="fas fa-home"></i> Home</Nav.Link>
            <Nav.Link href="#action1"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="#action3"><i className="fas fa-user"></i> Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;