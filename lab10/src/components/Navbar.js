import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHeader() {
  return (
    <>
        <Navbar className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand>FindAnyMovie.com</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarHeader
