import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./concept.css"

import Image from "./image"

const Footer = () => (
  <footer
    style={{
      color: "white",
      padding:"20px"
    }}
  >
    <Container fluid>

      <Row style={{ marginBottom: "0.5rem" }}>
        
        <Col
          style={{
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >

          <h4
            style={{
              marginBottom:"15px",
            }}
          >Contactos</h4>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"10px",
            }}
          >
            <div>
              <Image
                filename="tel-b.png"
                style={{ margin: "0.5rem", width: "2rem" }}
              />
            </div>

            <div
            style={{
              display: "flex", 
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginBottom:"10px",
              marginLeft:"15px"
            }}>
              <p>Joana Camacho (Relações Públicas)</p>
              <p>936 262 274</p>
            </div>
          </div>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"10px",
            }}
          >
            <div>
              <Image
                filename="tel-b.png"
                style={{ margin: "0.5rem", width: "2rem" }}
              />
            </div>

            <div
            style={{
              display: "flex", 
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginBottom:"10px",
              marginLeft:"15px"
            }}>
              <p>Ângela Coelho (Magister)</p>
              <p>917 912 918</p>
            </div>
          </div>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"10px",
            }}
          >
            <div>
              <Image
                filename="mail-b.png"
                style={{ margin: "0.5rem", width: "2rem" }}
              />
            </div>

            <div
              style={{
                marginLeft:"15px"
              }}
            >
              <p>tunafe@fe.up.pt</p>
            </div>
          </div>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"10px",
            }}
          >
            <div>
              <Image
                filename="morada-b.png"
                style={{ margin: "0.5rem", width: "2.5rem" }}
              />
            </div>

            <div
              style={{
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginBottom:"10px",
                marginLeft:"10px"
              }}
            >
                <p>Faculdade de Engenharia</p>
                <p>Rua Dr. Roberto Frias, s/n</p>
                <p>4200-465 Porto – Portugal</p>
            </div>
          </div>
          
        </Col>

        <Col
          style={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >

          <h4
            style={{
              marginBottom:"15px",
            }}
          >Segue-nos</h4>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
              marginBottom:"15px",
            }}
          >

          <Image
            filename="InstaB.png"
            style={{ marginRight: "1rem", width: "3rem" }}
          />

          <Image
            filename="FacebookB.png"
            style={{ marginRight: "1rem", width: "3rem" }}
          />
          
          <Image
            filename="YoutubeB.png"
            style={{ marginRight: "1rem", width: "3rem" }}
          />

          </div>

          <div
            style={{
              display: "flex", 
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
          
          <Image
            filename="LinkedinB.png"
            style={{ marginRight: "1rem", width: "3rem" }}
          />
          
          <Image
            filename="SpotifyB.png"
            style={{ marginRight: "1rem", width: "3rem" }}
          />

          </div>

        </Col>

        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <Image
            filename="Tunafe_nome.png"
            style={{ margin: "0.5rem", width: "14rem" }}
          />
          
          <Image
            filename="logo-feup.png"
            style={{ margin: "0.5rem", width: "12rem" }}
          />

          <Image
            filename="logo-ipdj.png"
            style={{ margin: "0.5rem", width: "12rem" }}
          />
          
        </Col>
        
      </Row>

      <Row>
          <p>TUNAFE - Desde 1991 + 1</p>
      </Row>

    </Container>
  </footer>
)

export default Footer
