import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import "../styles/main.scss";


const MyNav = () => {

    return (
        <div className="navbar-container">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Coronavirus and countries of the world</NavbarBrand>
                <Collapse navbar expand="ml">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/mustafaberat/covid19-website">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MyNav