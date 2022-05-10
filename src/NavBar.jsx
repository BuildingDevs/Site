import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <div className='Navbar'>
            <Navbar className='navbar' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">BuildingDevs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar