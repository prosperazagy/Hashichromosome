/*global chrome*/
import React, { useState } from 'react';
import NamespaceDropdown from './NamespaceDropdown';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Navigation() {

    const [isLoggedIn, setLogIn] = useState(false);

    return (

        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Container>
                    <Row>
                        <Col>
                            <Image width={32} height={32} src="../react256.png" rounded />
                        </Col>
                        {!isLoggedIn && 
                        <Col>
                            Hashicorp Vault
                        </Col>
                        }
                    </Row>
                </Container>
            </Navbar.Brand>

              <Nav className="navbar-brand mx-auto">
                {isLoggedIn && <NamespaceDropdown/>}
            </Nav>
            <Nav>
                <Button variant="secondary" onClick={() => setLogIn(!isLoggedIn)}>
                    {!isLoggedIn ? "Login" : "Logout"}
                </Button>
            </Nav>  
        </Navbar>
    );
}