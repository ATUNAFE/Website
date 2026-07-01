import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const Contacts = ({ magister, rp, email, address }) => (
    <Container style={{ fontSize: "13px" }}>
        <h5 className="text-center text-md-start mb-4" style={{ fontWeight: "bold" }}>Contactos</h5>
        <Row className="justify-content-center justify-content-md-start">
            <Col xs="auto" md={12} className="text-start">
                
                {/* RP Section */}
                <div className="d-flex align-items-center mb-3">
                    <div style={{ width: "25px", marginRight: "10px", flexShrink: 0 }}>
                        <CustomImage src={IMAGE_FILENAMES.pages.white.telefone} alt="Phone" />
                    </div>
                    <div>
                        <p className="mb-0">{`${rp.name} (Relações Públicas)`}</p>
                        <p className="mb-0">{rp.phone}</p>
                    </div>
                </div>

                {/* Magister Section */}
                <div className="d-flex align-items-center mb-3">
                    <div style={{ width: "25px", marginRight: "10px", flexShrink: 0 }}>
                        <CustomImage src={IMAGE_FILENAMES.pages.white.telefone} alt="Phone" />
                    </div>
                    <div>
                        <p className="mb-0">{`${magister.name} (Magister)`}</p>
                        <p className="mb-0">{magister.phone}</p>
                    </div>
                </div>

                {/* E-mail Section */}
                <div className="d-flex align-items-center mb-3">
                    <div style={{ width: "25px", marginRight: "10px", flexShrink: 0 }}>
                        <CustomImage src={IMAGE_FILENAMES.pages.white.mail} alt="Mail" />
                    </div>
                    <div>
                        <p className="mb-0">{email}</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="d-flex align-items-start">
                    <div style={{ width: "25px", marginRight: "10px", flexShrink: 0 }} className="pt-1">
                        <CustomImage src={IMAGE_FILENAMES.pages.white.morada} alt="Address" />
                    </div>
                    <div>
                        {address.split("\n").map((line, index) => (
                            <p key={index} className="mb-0">{line}</p>
                        ))}
                    </div>
                </div>

            </Col>
        </Row>
    </Container>
);

export default Contacts;