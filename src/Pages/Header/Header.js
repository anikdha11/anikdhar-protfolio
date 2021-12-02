import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} className="fw-bold text-primary link" to="/home">Anik Dhar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link as={HashLink}  to="/home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link  as={HashLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;