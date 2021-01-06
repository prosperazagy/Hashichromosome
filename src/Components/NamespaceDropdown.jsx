import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

export default function NamespaceDropdown() {


	return (
        <NavDropdown title="Namespaces" id="collasible-nav-dropdown" fixed="top">       
                <Dropdown.ItemText>current namespace path</Dropdown.ItemText>
                <Dropdown.Divider/>
                <Dropdown.Item>namespace1</Dropdown.Item>
                <Dropdown.Item>namespace2</Dropdown.Item>
                <Dropdown.Item>namespace3</Dropdown.Item>
        </NavDropdown>
    )
}