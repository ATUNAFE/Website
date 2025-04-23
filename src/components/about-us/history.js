import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import logoTunafe from "../../images/LogoTunafe.png";
import historyImage from "../../images/Páginas/HistorialP.png";
import someImage from "../../images/IMG_4101.jpg";


const History = ({ title, citation, html }) => (
    <div style={{
        position: "relative",
        backgroundColor: "var(--light-neutral)"
    }}>
        <Image
            src={historyImage}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "30%",
                opacity: 0.05,
                filter: "grayscale(100%)",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
        <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
            <Row>
                <h3>{title}</h3>
            </Row>
            <Row>
                <Col xs={6} md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={logoTunafe}
                        alt="TUNAFE"
                        fluid
                        style={{
                            height: "auto",
                            width: "auto",
                        }}
                    />
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-center">
                    <div style={{ textAlign: "justify" }}>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                    <div className="text-center">
                        <p><i>{citation.text}</i></p>
                    </div>
                    <div className="text-end">
                        <p><i>{citation.author}</i></p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>

                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>

                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>

                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>

                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>

                <Col xs={3} md={2}>
                    <Image
                        src={someImage}
                        alt="TUNAFE"
                        fluid
                        style={{
                            maxHeight: "150px",
                            height: "auto",
                            width: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Col>
            </Row>
        </Container>
    </div>
);

export default History;