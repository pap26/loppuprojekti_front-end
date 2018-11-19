import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        KopseT04-05
                        {/* <Link to="/">KopseT04-05</Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="/">Etusivu</NavItem>
                    <NavItem eventKey={2} href="/tapahtumat">Tapahtumat</NavItem>
                    <NavItem eventKey={3} href="/info">Info</NavItem>
                    <NavItem eventKey={4} href="/pelaajat">Pelaajat</NavItem>
                    <NavItem eventKey={5} href="/toimihenkilot">Toimihenkilöt</NavItem>
                </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={6} href="/kirjaudu">Kirjaudu ulos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;