import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import MultiImageCarousel from "../carousels/multi-image-carousel";
import { useStaticQuery, graphql } from "gatsby";

const History = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/history/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
                        image
                        carousel
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div 
            id={id} 
            style={{
                position: "relative",
                backgroundColor: "var(--light-neutral)",
                overflow: "hidden"
            }}
        >
            {/* Injecting CSS specifically for the Markdown output */}
            <style>{`
                .history-content blockquote {
                    border-left: none;
                    margin-top: 2.5rem;
                    padding: 0;
                    font-style: italic;
                    color: inherit;
                }
                .history-content blockquote p {
                    margin-bottom: 0.5rem;
                    text-align: justify;
                }
                /* Targets the last paragraph in a blockquote (the author) */
                .history-content blockquote p:last-child {
                    text-align: right;
                    font-style: normal;
                    margin-top: 1rem;
                }
            `}</style>

            <CustomImage
                src={content.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "30%",
                    opacity: 0.05,
                    filter: "grayscale(100%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-4">
                    <Col>
                        <h2 style={{ fontWeight: "bold" }}>{content.frontmatter.title.text}</h2>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
                        <CustomImage
                            src={content.frontmatter.image}
                            style={{ width: "100%", maxWidth: "300px" }}
                        />
                    </Col>
                    <Col xs={12} md={8}>
                        <div className="history-content">
                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <MultiImageCarousel images={content.frontmatter.carousel} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default History;