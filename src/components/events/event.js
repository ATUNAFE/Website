import React from "react";
import CustomImage from "../images/image";
import { Container, Row, Col } from "react-bootstrap";

const Event = ({ event, theme }) => {
    return (
        <div style={{
            position: "relative",
            color: theme.color,
            backgroundColor: theme.backgroundColor
        }}
        >
            <CustomImage
                src={theme.watermark}
                alt=""
                sizes="25vw"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "25%",
                    opacity: 0.05,
                    filter: "grayscale(100%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <Col
                        xs={6}
                        md={4}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <CustomImage
                            src={event.frontmatter.image}
                            alt={event.frontmatter.title.text}
                            sizes="(min-width: 768px) 27vw, 40vw"
                            style={{ width: "80%" }}
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-center align-items-center w-80"
                    >
                        <div style={{ width: "80%" }}>
                            <h3 className="w-100 text-start">{event.frontmatter.title.text}</h3>
                            <p className="w-100 text-start">{event.frontmatter.date}</p>
                            <div style={{ textAlign: "justify" }} className="mt-4">
                                <div dangerouslySetInnerHTML={{ __html: event.html }} />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Event;
