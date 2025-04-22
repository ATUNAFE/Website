import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import phoneIcon from "../../images/Páginas/TelefoneB.png";
import mailIcon from "../../images/Páginas/MailB.png";
import addressIcon from "../../images/Páginas/MoradaB.png";

// TODO: Tornar os contactos em Markdown para ser editável

const Contacts = () => (
    <Container style={{ fontSize: "12px" }}>
        {/* RP */ }
        <Row className="align-items-center mb-2" >
            <Col xs="6" md="4" className="text-end">
                <Image
                src={phoneIcon}
                alt="Phone"
                style={{ maxHeight: "24px" }}
                fluid
                />
            </Col>
            <Col xs="12" md="8" className="text-start">
                <p className="mb-0">Beatriz Remondes (Relações Públicas)</p>
                <p className="mb-0">917912918</p>
            </Col>
        </Row>

        {/* Magister */ }
        <Row className="align-items-center mb-2">
            <Col xs="6" md="4" className="text-end">
                <Image
                src={phoneIcon}
                alt="Phone"
                style={{ maxHeight: "24px" }}
                fluid
                />
            </Col>
            <Col xs="12" md="8" className="text-start">
                <p className="mb-0">Ana Rita Marques (Magister)</p>
                <p className="mb-0">917912918</p>
            </Col>
        </Row>

        {/* E-mail */}
        <Row className="align-items-center mb-2">
            <Col xs="6" md="4" className="text-end">
                <Image
                src={mailIcon}
                alt="Phone"
                style={{ maxHeight: "24px" }}
                fluid
                />
            </Col>
            <Col xs="12" md="8" className="text-start">
                <p className="mb-0">tunafe@fe.up.pt</p>
            </Col>
        </Row>

        {/* Morada */ }
        <Row className="align-items-center">
            <Col xs="6" md="4" className="text-end">
                <Image
                src={addressIcon}
                alt="Phone"
                style={{ maxHeight: "24px" }}
                fluid
                />
            </Col>
            <Col xs="12" md="8" className="text-start">
                <p className="mb-0">Faculdade de Engenharia</p>
                <p className="mb-0">Rua Dr. Roberto Frias, s/n</p>
                <p className="mb-0">4200-465 Porto - Portugal</p>
            </Col>
        </Row>
    </Container>
);

export default Contacts;