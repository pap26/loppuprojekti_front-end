import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
            <div className="valikko">
            <Navbar staticTop >
                <Navbar.Header>
                    <Navbar.Brand>
                        KopseT04-05
                        {/* <Link to="/">KopseT04-05</Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="/">Tapahtumat</NavItem>
                    <NavItem eventKey={2} href="/pelaajat">Pelaajat</NavItem>
                    <NavItem eventKey={3} href="/toimihenkilot">Toimihenkilöt</NavItem>
                    <NavItem eventKey={4} href="/kalenteri">Kalenteri</NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={5} button onClick={this.logout} href="/">Kirjaudu ulos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Navigation;