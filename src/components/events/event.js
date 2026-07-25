import React from "react";
import CustomImage from "../images/image";
import { Container, Row, Col } from "react-bootstrap";

const Event = ({ event, theme }) => {
    return (
        <div
            className="event-card"
            style={{
                position: "relative",
                color: theme.color,
                backgroundColor: theme.backgroundColor
            }}
        >
            <CustomImage
                src={theme.watermark}
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
                <Row className="gx-4 gy-4 align-items-center justify-content-center">
                    <Col
                        xs={12}
                        md={4}
                        className="d-flex justify-content-center"
                    >
                        <div className="event-card-image-wrapper">
                            <CustomImage style={{ width: "100%", height: "auto" }} src={event.frontmatter.image} />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <div className="event-card-content-wrapper">
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
