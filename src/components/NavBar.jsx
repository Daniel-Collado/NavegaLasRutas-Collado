/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import CartWidget from './CartWidget'
import NavButton from './NavButton'
import { Link } from 'react-router-dom'


const NavBar = ({ cantidadEnCarrito }) => {
    return (
        <>
            <Navbar className="mi-navbar" expand="md" sticky="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" /> 
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Navbar.Brand as={Link} to="/">Tienda ALLroy</Navbar.Brand>
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <NavButton to="/category/jewelery">Joyas</NavButton>
                            <NavButton to="/category/electronics">Electrónica</NavButton>
                            <NavButton to="/category/men's%20clothing">Ropa de hombre</NavButton>
                            <NavButton to="/category/women's%20clothing">Ropa de mujer</NavButton>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget cantidad={cantidadEnCarrito} />
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;