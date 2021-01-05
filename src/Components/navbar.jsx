/*global chrome*/
import React, { Component } from 'react';
import NamespaceDropdown from './NamespaceDropdown';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: false
        }
    }

    componentDidMount = () => {
       
    }

    componentDidLoad = () => {
       
    }

    LoginTest = () => {
        this.setState({test: !this.state.test})
    }

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                    <Container>
                        <Row>
                            <Col>
                                <Image width={32} height={32} src="../react256.png" rounded />
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>

                <Nav className="navbar-brand mx-auto d-block text-center">
                    {this.state.test && <NamespaceDropdown />}
                </Nav>
                <Nav>
                    <Button variant="secondary" onClick={this.LoginTest}>
                        {!this.state.test ? "Login" : "Logout"}
                    </Button>
                </Nav>
            </Navbar>


        )
    }
}

export default Navigation;