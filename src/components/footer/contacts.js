import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const Contacts = ({ magister, rp, email, address }) => (
    <Container style={{ fontSize: "13px" }}>
        <h5 className="text-start" style={{ fontWeight: "bold" }}>Contactos</h5>

        {/* RP */}
        <Row className="align-items-center mb-2" >
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.telefone}
                    alt="Phone"
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">{`${rp.name} (Relações Públicas)`}</p>
                <p className="mb-0">{rp.phone}</p>
            </Col>
        </Row>

        {/* Magister */}
        <Row className="align-items-center mb-2">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.telefone}
                    alt="Phone"
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">{`${magister.name} (Magister)`}</p>
                <p className="mb-0">{magister.phone}</p>
            </Col>
        </Row>

        {/* E-mail */}
        <Row className="align-items-center mb-2">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.mail}
                    alt="Phone"
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                <p className="mb-0">{email}</p>
            </Col>
        </Row>

        {/* Morada */}
        <Row className="align-items-center">
            <Col xs="4" md="2" className="text-center">
                <CustomImage
                    src={IMAGE_FILENAMES.pages.white.morada}
                    alt="Phone"
                />
            </Col>
            <Col xs="14" md="10" className="text-start">
                {address.split("\n").map((line, index) => (
                    <p key={index} className="mb-0">
                        {line}
                    </p>
                ))}
            </Col>
        </Row>
    </Container>
);

export default Contacts;