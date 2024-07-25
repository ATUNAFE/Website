import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./concept.css"

import Image from "./image"

const Footer = () => (
  <footer>
    <Container fluid>
      <Row style={{ marginBottom: "0.5rem" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            filename="logo-feup.png"
            style={{ margin: "0.5rem", width: "12rem" }}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            filename="LogoTunafe.png"
            style={{ margin: "0.5rem", width: "6rem" }}
          />
          <div
            style={{
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <p>Tuna Feminina de Engenharia</p>
            <p>da Universidade do Porto</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>TUNAFE - Desde 1991 + 1</p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
