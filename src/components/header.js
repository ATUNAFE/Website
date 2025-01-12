import React from 'react';
import "./layout.css"
import PropTypes from "prop-types"
import HeaderLink from './header_link'
import Image from "./image"
import { Dropdown, Col, Row, Container} from 'react-bootstrap';
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

const backgroundColor = 'rgba(245, 245, 245, 0.5)';

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
                filename="LogoTunafe.png"
                style={{ margin: "0", width: "5.5rem" }}
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
