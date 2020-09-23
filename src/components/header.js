import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Dropdown from 'react-bootstrap/Dropdown'

import { FaBars } from "react-icons/fa";

import Image from "./image"
import HeaderLink from "./header_link"

const Header = () => (
  <header>
    <Container fluid style={{margin:'0', padding:'0', width:'100%'}}>
      <Row style={{margin:'0', padding:'0'}}>
        <Col></Col>
        <Col style={{padding:'0.5rem', display:'flex', justifyContent:'center'}}>
          <Link
              to="/"
          >
              <Image filename="LogoTunafe.png" style={{margin:'0', width:'5.5rem'}}/>
          </Link>
        </Col>
        <Col id='siteMenu'>
          <HeaderLink link="/aboutus" context="Sobre Nós"/>
          <HeaderLink link="/events" context="Eventos"/>
          <HeaderLink link="/music" context="Música"/>
        </Col>
        <Col id='mobileMenu'>
          <Dropdown>
            <Dropdown.Toggle id="menuIcon">
              <FaBars></FaBars>
            </Dropdown.Toggle>

            <Dropdown.Menu id="menu">
              <HeaderLink link="/aboutus" context="Sobre Nós"/>
              <HeaderLink link="/events" context="Eventos"/>
              <HeaderLink link="/music" context="Música"/>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Button variant="outline-secondary"><FaBars></FaBars></Button>
          <div
            style={{
              padding:'1rem',
              height:'10rem',
              display: 'flex',
              flexDirection:'column',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              backgroundColor: 'var(--tunafe-light)',
              position:'absolute',
              top: '5rem',
              right:'0',
              borderRadius: '0.5rem'
            }}
          >
            <HeaderLink link="/aboutus" context="Sobre Nós"/>
            <HeaderLink link="/events" context="Eventos"/>
            <HeaderLink link="/music" context="Música"/>
          </div> */}
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
