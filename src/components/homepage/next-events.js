import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";

const NextEvents = ({ events }) => (
    <Container fluid className="py-5" style={{
        backgroundColor: "var(--light-neutral)"
    }}>
        <Row className="p-4">
            <h3>Próximos Eventos</h3>
        </Row>

        <Row>
            {events.map((event, index) => (
                <Col
                    key={index}
                    xs={6}
                    md={4}
                    className="d-flex flex-column align-items-center justify-content-start text-center"
                >
                    <CustomImage
                        src={event.image.src}
                        alt={event.image.alt}
                        style={{ width: "50%" }}
                    />
                    <div className="mt-3">
                        <h5>{event.name}</h5>
                        <p className="mb-0">{event.date}</p>
                        <p className="mb-0">{event.local}</p>
                        <p>{event.organization}</p>
                    </div>
                </Col>
            ))}
        </Row>

        <Row
            className="w-100 align-items-center justify-content-center pt-5"
        >
            <Col
                xs="auto"
                className="d-flex align-items-center justify-content-center"
            >
                <h4 className="mb-0">
                    Descobre mais{" "}
                    <a
                        href="/events"
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
                        eventos!
                    </a>
                </h4>
            </Col>
        </Row>
    </Container>
);

export default NextEvents;