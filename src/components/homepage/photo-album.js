import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import SingleImageCarousel from "../carousels/single-image-carousel";
import { graphql, useStaticQuery } from "gatsby";

const PhotoAlbum = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/photoAlbum/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        carousel
                        button {
                            text
                            link
                        }
                    }
                }
            }
        }    
    `);

    const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <Container
            fluid
            style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            <Row className="py-5">
                <SingleImageCarousel
                    images={content.frontmatter.carousel}
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
                            href={content.frontmatter.button.link}
                            style={{
                                color: "var(--dark-engineer)",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                            onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                            onMouseLeave={e => (e.target.style.textDecoration = "none")}
                        >
                            {content.frontmatter.button.text}
                        </a>
                    </h4>
                </Col>
            </Row>
        </Container>
    );
}

export default PhotoAlbum;
