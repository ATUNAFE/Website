import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import SingleImageCarousel from "../carousels/single-image-carousel"

const PhotoAlbum = ({ carousel }) => (
    <Container
        fluid
        style={{
            backgroundColor: "var(--dark-neutral)",
            color: "var(--light-neutral)",
        }}
    >
        <Row className="py-5">
            <SingleImageCarousel
                images={carousel}
                withControls={true}
                withIndicators={true}
                invertedColors={true}
            />
        </Row>
        <Row
            className="w-100 align-items-center justify-content-center pb-5"
            style={{
                color: "var(--dark-engineer)",
            }}
        >
            <Col
                xs="auto"
                className="d-flex align-items-center justify-content-center"
            >
                {/* TODO: Adicionar link para página do facebook com albums */}
                <h4>
                    <a
                        href="/"
                        style={{
                            color: "var(--dark-engineer)",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                        onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                        onMouseLeave={e => (e.target.style.textDecoration = "none")}
                    >
                        Acompanha-nos!
                    </a>
                </h4>
            </Col>
        </Row>
    </Container>
)

export default PhotoAlbum
