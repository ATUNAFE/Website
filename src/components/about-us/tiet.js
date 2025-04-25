import React from "react";
import { navigate } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const TIET = ({ html }) => (
    <div style={{
        position: "relative",
        backgroundColor: "var(--dark-neutral)",
        color: "var(--light-neutral)"
    }}>
        <CustomImage
            filename={IMAGE_FILENAMES.pages.white.tiet}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                opacity: 0.03,
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
        <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
            <Row>
                <h3>Tudo Isto É Tuna</h3>
            </Row>
            <Row>
                <Col xs={6} md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <CustomImage
                        filename={IMAGE_FILENAMES.logos.white.tiet}
                        alt="TIET"
                    />
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-center align-items-center">
                    <Row>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </Row>
                    <Row>
                        <Button className="custom-button"
                            onClick={() => navigate("/")}>
                            <h4 className="button-text">Edições</h4>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);

export default TIET;