import React, { useState } from 'react';
import { Dropdown, Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";

import HeaderLink from './header-link';
import logo from "../../images/LogoTunafe.png";
import "../../style/layout.css";

const backgroundColor = 'rgba(245, 245, 245, 0.5)';

const Header = ({ siteTitle = '' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState); // Toggle dropdown open/close

  return (
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
          transition: 'backgroundColor 0.5s ease',
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
                  maxHeight: "60px",
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Col>
          <Col id="siteMenu">
            <Dropdown
              show={dropdownOpen} // Controls visibility based on state
              onToggle={toggleDropdown} // Toggle dropdown on click
            >
              <Dropdown.Toggle className="dropdown-toggle" onClick={toggleDropdown}>
                Sobre Nós
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item" href="/aboutus/history">Historial</Dropdown.Item>
                <Dropdown.Item href="/members/active">Membros</Dropdown.Item>
                <Dropdown.Item href="/404">Padrinhos</Dropdown.Item>
                <Dropdown.Item href="/404">Tudo Isto É Tuna</Dropdown.Item>
                <Dropdown.Item href="/404">Ensaios</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <HeaderLink link="/events" context="Eventos" />
            <HeaderLink link="/music" context="Música" />
          </Col>
          <Col id="mobileMenu">
            <Dropdown>
              <Dropdown.Toggle id="menuIcon">
                <FaBars />
              </Dropdown.Toggle>

              <Dropdown.Menu id="menu">
                <HeaderLink link="/about-us" context="Sobre Nós" />
                <HeaderLink link="/events" context="Eventos" />
                <HeaderLink link="/music" context="Música" />
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
