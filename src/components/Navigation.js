import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { auth } from "../firebase/auth";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }    

    logout() {
        auth.signOut();
    }

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
                    <NavItem eventKey={6} button onClick={this.logout} href="/">Kirjaudu ulos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;

// {this.props.user?
//     <NavItem eventKey={6} href="/kirjaudu">Kirjaudu ulos</NavItem> :
//     <NavItem eventKey={7} href="/kirjaudu">Kirjaudu sisään</NavItem>
// }