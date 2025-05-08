import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import CustomImage from "../images/image";

const HeroSection = ({ title, description, backgroundImage }) => (
    <div
        style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            width: "100%",
        }}
    >
        <CustomImage
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            style={{ height: "100%", width: "100%" }}
            imgStyle={{
                objectFit: "cover",
                objectPosition: "50% 15%",
                height: "100%",
                width: "100%",
            }}
        />

        {/* Top Line */}
        <div
            className="position-absolute start-50 translate-middle-x"
            style={{
                top: "135px",
                width: "90%",
                height: "4px",
                backgroundColor: "var(--light-engineer)",
            }}
        />

        {/* Bottom Line */}
        <div
            className="position-absolute start-50 translate-middle-x"
            style={{
                bottom: "60px",
                width: "90%",
                height: "4px",
                backgroundColor: "var(--dark-green)",
            }}
        />

        <div
            className="position-absolute w-100"
            style={{
                top: "50%",
                transform: "translateY(-50%)",
                padding: "0 20px",
            }}
        >
            <Container>
                <Row className="text-light" style={{ minHeight: "300px" }}>
                    <Col
                        xs={10}
                        md={8}
                        className="d-flex flex-column justify-content-start text-md-start text-center"
                    >
                        <h1
                            style={{
                                fontWeight: "bold",
                                color: "var(--light-neutral)",
                                marginBottom: "1rem",
                            }}
                        >
                            {title}
                        </h1>
                    </Col>

                    <Col
                        xs={8}
                        md={4}
                        className="d-flex flex-column text-md-start text-center"
                        style={{ marginTop: "auto" }}
                    >
                        <p
                            style={{
                                color: "var(--dark-neutral)",
                                textAlign: "justify",
                                maxWidth: "90%",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {description}
                        </p>
                        <p
                            className="mt-4"
                            style={{
                                color: "var(--dark-neutral)",
                                fontWeight: "bold",
                            }}
                        >
                            Sabe mais{" "}
                            <a
                                href="/about-us"
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
                                sobre nós!
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
);

export default HeroSection;