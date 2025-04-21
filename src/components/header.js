import React from 'react';
import "../style/layout.css"
import PropTypes from "prop-types"
import HeaderLink from './header_link'
import { Dropdown, Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from "gatsby"

import Dropdown from "react-bootstrap/Dropdown"

import { FaBars } from "react-icons/fa"
import logo from "../images/LogoTunafe.png";

import HeaderLink from "./header_link"

const Header = () => (
    <header>
        <Container fluid style={{ margin: "0", padding: "0", width: "100%" }}>
            <Row style={{
                margin: "0",
                padding: "0",
                height: '77px',
                width: '100%',
                position: 'fixed',
                backgroundColor,
                zIndex: 10,
                transition: 'backgroundColor 0.5s ease', // Smooth transition
            }}>
                <Col></Col>
                <Col
                    style={{
                        padding: "0.5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Link to="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            fluid
                            style={{
                                maxHeight: "60px", // explicitly limit image height
                                height: "100%",
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Link>
                </Col>
                <Col id="siteMenu">
                    <HeaderLink link="/aboutus" context="Sobre Nós" />
                    <HeaderLink link="/events" context="Eventos" />
                    <HeaderLink link="/music" context="Música" />
                </Col>
                <Col id="mobileMenu">
                    <Dropdown>
                        <Dropdown.Toggle id="menuIcon">
                            <FaBars></FaBars>
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="menu">
                            <HeaderLink link="/aboutus" context="Sobre Nós" />
                            <HeaderLink link="/events" context="Eventos" />
                            <HeaderLink link="/music" context="Música" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
