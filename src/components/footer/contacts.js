import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

// TODO: Tornar os contactos em Markdown para ser editável

const Contacts = () => (
    <Container style={{ fontSize: "13px" }}>
        <h5 className="text-start" style={{ fontWeight: "bold" }}>Contactos</h5>
        {/* RP */}
        <Row className="align-items-center mb-2" >
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    filename={IMAGE_FILENAMES.pages.white.telefone}
                    alt="Phone"
                // style={{ maxHeight: "24px" }}
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">Beatriz Remondes (Relações Públicas)</p>
                <p className="mb-0">917912918</p>
            </Col>
        </Row>

        {/* Magister */}
        <Row className="align-items-center mb-2">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    filename={IMAGE_FILENAMES.pages.white.telefone}
                    alt="Phone"
                // style={{ maxHeight: "24px" }}
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">Ana Rita Marques (Magister)</p>
                <p className="mb-0">917912918</p>
            </Col>
        </Row>

        {/* E-mail */}
        <Row className="align-items-center mb-2">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    filename={IMAGE_FILENAMES.pages.white.mail}
                    alt="Phone"
                    // style={{ maxHeight: "24px" }}
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">tunafe@fe.up.pt</p>
            </Col>
        </Row>

        {/* Morada */}
        <Row className="align-items-center">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    filename={IMAGE_FILENAMES.pages.white.morada}
                    alt="Phone"
                    // style={{ maxHeight: "24px" }}
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">Faculdade de Engenharia</p>
                <p className="mb-0">Rua Dr. Roberto Frias, s/n</p>
                <p className="mb-0">4200-465 Porto - Portugal</p>
            </Col>
        </Row>
    </Container>
);

export default Contacts;