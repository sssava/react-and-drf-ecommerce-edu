import React from 'react';

import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Link className="text-decoration-none" to="/"><Navbar.Brand>Rooty</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <LinkContainer className="text-decoration-none" to="/"><Nav.Link><i className="fas fa-home"></i> Home</Nav.Link></LinkContainer>
            <LinkContainer className="text-decoration-none" to="/cart"><Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link></LinkContainer>
            <LinkContainer className="text-decoration-none" to="/login"><Nav.Link><i className="fas fa-user"></i> Login</Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;