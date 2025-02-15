/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavButton = ({ to, children }) => {
  return (
    <Nav.Link as={Link} to={to}>
      <Button className="buttonNavbar">{children}</Button>
    </Nav.Link>
  );
};

export default NavButton
