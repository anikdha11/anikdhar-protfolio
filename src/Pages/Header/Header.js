import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {

   

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky='top'>
                <Container>
                    <Navbar.Brand id="nav-link" as={HashLink} className="text-dark p-2" to="/home"><img className='icon' src="https://img.icons8.com/windows/32/000000/user-male.png" alt="" /></Navbar.Brand>
                    <Navbar.Brand id="nav-link" as={HashLink} className="text-dark p-2" to="/home">Anik Dhar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link id="nav-link" as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link id="nav-link" href="#projects">Projects</Nav.Link>
                            <Nav.Link id="nav-link" as={HashLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link id="nav-link" href="#contact">Contact</Nav.Link>
                            <Nav.Link id="nav-link" as={HashLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;