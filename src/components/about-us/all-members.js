import React from "react";
import { navigate } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";
import { IMAGE_FILENAMES } from "../../utils/constants";

const AllMembers = ({ html }) => (
    <div style={{
        position: "relative",
        backgroundColor: "var(--dark-neutral)",
        color: "var(--light-neutral)"
    }}>
        <CustomImage
            filename={IMAGE_FILENAMES.pages.white.membros}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
        <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
            <Row>
                <h3>Membros</h3>
            </Row>

            <Row className="my-4">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Row>

            <Row>
                <Col xs={9} md={6} style={{ height: '100px' }} className="d-flex flex-column justify-content-center align-items-center">
                    <Button
                        className="custom-button"
                        onClick={() => navigate("/members/active")}>
                        <h4 className="button-text">Atualmente</h4>
                    </Button>
                </Col>

                <Col xs={9} md={6} style={{ height: '100px' }} className="d-flex flex-column justify-content-center align-items-center">
                    <Button className="custom-button"
                        onClick={() => navigate("/members/inactive")}>
                        <h4 className="button-text">Sempre Tunafas</h4>
                    </Button>
                </Col>
            </Row>

        </Container>
    </div>
);

export default AllMembers;