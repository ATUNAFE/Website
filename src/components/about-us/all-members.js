import React from "react"
import { navigate } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import CustomImage from "../images/image"

const AllMembers = ({ title, watermark, html }) => (
    <div
        style={{
            position: "relative",
            backgroundColor: "var(--dark-neutral)",
            color: "var(--light-neutral)",
        }}
    >
        <CustomImage
            src={watermark.src}
            alt={watermark.alt}
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
                <h3>{title}</h3>
            </Row>

            <Row className="my-4">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Row>

            <Row>
                <Col
                    xs={9}
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <Button
                        className="custom-button"
                        onClick={() => navigate("/members/active")}
                        style={{
                            height: "70px",
                            width: "30%"
                        }}
                    >
                        <h5 className="button-text">Atualmente</h5>
                    </Button>
                </Col>

                <Col
                    xs={9}
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <Button
                        className="custom-button"
                        onClick={() => navigate("/members/inactive")}
                        style={{
                            height: "70px",
                            width: "30%"
                        }}
                    >
                        <h5 className="button-text">Sempre Tunafas</h5>
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
)

export default AllMembers
