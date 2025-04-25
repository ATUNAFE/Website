import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import CustomImage from "../images/image"
import { IMAGE_FILENAMES } from "../../utils/constants"

const Godparents = ({ title, image, html }) => (
    <div
        style={{
            position: "relative",
            backgroundColor: "var(--light-neutral)",
        }}
    >
        <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
            <Row>
                <h3>{title}</h3>
            </Row>
            <Row>
                <Col
                    xs={12}
                    md={8}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <Row>
                        <div style={{ textAlign: "justify" }}>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>{" "}
                    </Row>
                    <Row className="mt-4">
                        <h2>
                            <a
                                href="https://fe.up.pt/teup/"
                                style={{
                                    color: "var(--light-green)",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={e =>
                                    (e.target.style.textDecoration = "underline")
                                }
                                onMouseLeave={e => (e.target.style.textDecoration = "none")}
                            >
                                Sabe mais sobre a TEUP
                            </a>
                        </h2>
                    </Row>
                </Col>
                <Col
                    xs={6}
                    md={4}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <CustomImage src={image.src} alt={image.alt} />
                </Col>
            </Row>
        </Container>
    </div>
)

export default Godparents
