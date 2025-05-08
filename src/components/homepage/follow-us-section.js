import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const FollowUsSection = () => (
    <Container
        fluid
        className="d-flex justify-content-center align-items-center py-5"
        style={{
            backgroundColor: "var(--light-engineer)",
            color: "var(--light-neutral)",
        }}
    >
        <Row className="w-100 align-items-center justify-content-center">
            <Col
                xs="auto"
                className="d-flex align-items-center justify-content-center"
            >
                <h4 className="mb-0">
                    Queres juntar-te a nós? Aparece num dos nossos{" "}
                    <a
                        href="/about-us#ensaios"
                        style={{
                            color: "var(--light-green)",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                        onMouseEnter={e =>
                            (e.target.style.textDecoration = "underline")
                        }
                        onMouseLeave={e => (e.target.style.textDecoration = "none")}
                    >
                        ensaios.
                    </a>
                </h4>
            </Col>
        </Row>
    </Container>
);

export default FollowUsSection;