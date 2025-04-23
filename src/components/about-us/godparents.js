import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import logoTunafe from "../../images/LogoTunafe.png";
import historyImage from "../../images/Páginas/HistorialP.png";
import someImage from "../../images/IMG_4101.jpg";
import logoTeup from "../../images/Logos/TeupMonograma.png";

const Godparents = ({ html }) => (
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
                <h3>Padrinhos</h3>
            </Row>
            <Row>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-center align-items-center">
                    <Row>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </Row>
                    <Row className="mt-4">
                        <h2>
                            <a href="https://fe.up.pt/teup/"
                                style={{
                                    color: 'var(--light-green)',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                                Sabe mais sobre a TEUP
                            </a>
                        </h2>
                    </Row>
                </Col>
                <Col xs={6} md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <Image
                        src={logoTeup}
                        alt="TEUP"
                        fluid
                        style={{
                            height: "auto",
                            width: "auto",
                        }}
                    />
                </Col>
            </Row>
        </Container>
    </div>
);

export default Godparents;