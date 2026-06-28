import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const Contacts = ({ magister, rp, email, address }) => (
    <Container style={{ fontSize: "13px" }}>
        <h5 className="text-center text-md-start mb-4" style={{ fontWeight: "bold" }}>Contactos</h5>

        {/* RP Section */}
        <Row className="mb-3 justify-content-center justify-content-md-start flex-nowrap">
            <Col xs="auto" className="d-flex align-items-center">
                <div style={{ width: "20px" }}>
                    <CustomImage src={IMAGE_FILENAMES.pages.white.telefone} alt="Phone" />
                </div>
            </Col>
            <Col xs="auto" className="text-start">
                <p className="mb-0">{`${rp.name} (Relações Públicas)`}</p>
                <p className="mb-0">{rp.phone}</p>
            </Col>
        </Row>

        {/* Magister Section */}
        <Row className="mb-3 justify-content-center justify-content-md-start flex-nowrap">
            <Col xs="auto" className="d-flex align-items-center">
                <div style={{ width: "20px" }}>
                    <CustomImage src={IMAGE_FILENAMES.pages.white.telefone} alt="Phone" />
                </div>
            </Col>
            <Col xs="auto" className="text-start">
                <p className="mb-0">{`${magister.name} (Magister)`}</p>
                <p className="mb-0">{magister.phone}</p>
            </Col>
        </Row>

        {/* E-mail Section */}
        <Row className="mb-3 justify-content-center justify-content-md-start flex-nowrap">
            <Col xs="auto" className="d-flex align-items-center">
                <div style={{ width: "20px" }}>
                    <CustomImage src={IMAGE_FILENAMES.pages.white.mail} alt="Mail" />
                </div>
            </Col>
            <Col xs="auto" className="text-start">
                <p className="mb-0">{email}</p>
            </Col>
        </Row>

        {/* Address Section */}
        <Row className="justify-content-center justify-content-md-start flex-nowrap">
            <Col xs="auto" className="d-flex align-items-start pt-1">
                <div style={{ width: "20px" }}>
                    <CustomImage src={IMAGE_FILENAMES.pages.white.morada} alt="Address" />
                </div>
            </Col>
            <Col xs="auto" className="text-start">
                {address.split("\n").map((line, index) => (
                    <p key={index} className="mb-0">{line}</p>
                ))}
            </Col>
        </Row>
    </Container>
);

export default Contacts;