/*global chrome*/
import React, { useState } from 'react';
import NamespaceDropdown from './NamespaceDropdown';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Navigation() {

    const [isLoggedIn, setLogIn] = useState(false);

    return (

        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Container>
                    <Row>
                        <Col>
                            <Link to="/Home" > <Image width={32} height={32} src="../react256.png" fluid /> </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Brand>

            <Nav className="navbar-brand mx-auto">
                {isLoggedIn && <NamespaceDropdown />}
            </Nav>
            <Nav>
                {isLoggedIn ?
                    <Link to="/Home" >
                        <Button variant="secondary" onClick={() => setLogIn(!isLoggedIn)}>
                            <span>Logout</span>
                        </Button>
                    </Link>
                    :
                    <Link to="/Login">
                        <Button variant="secondary" onClick={() => setLogIn(!isLoggedIn)}>
                            <span>Login</span>
                        </Button>
                    </Link>
                }
            </Nav>
        </Navbar>
    );
}