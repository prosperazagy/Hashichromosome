import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'


class NamespaceDropdown extends Component {
    render() {

        

        return (
            <NavDropdown title="Namespaces" id="collasible-nav-dropdown">       
                    <Dropdown.ItemText>current namespace path</Dropdown.ItemText>
                    <Dropdown.Divider/>
                    <Dropdown.Item>namespace1</Dropdown.Item>
                    <Dropdown.Item>namespace2</Dropdown.Item>
                    <Dropdown.Item>namespace3</Dropdown.Item>
                
            </NavDropdown>
        )
    }
}
export default NamespaceDropdown;

