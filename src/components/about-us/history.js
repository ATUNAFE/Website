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
            {/* CSS for Markdown elements: Targets the quote specifically */}
            <style>{`
                .history-content blockquote {
                    border-left: none;
                    margin-top: 2rem;
                    padding: 0;
                    font-style: italic;
                }
                .history-content blockquote p {
                    margin-bottom: 0.5rem;
                }
                /* Aligns the author (last line of blockquote) to the right */
                .history-content blockquote p:last-child {
                    text-align: right;
                    font-style: normal;
                    margin-top: 10px;
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
                {/* Title - Restored to Left Alignment */}
                <Row className="mb-3">
                    <Col>
                        <h3 style={{ fontWeight: "bold" }}>{content.frontmatter.title.text}</h3>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    {/* Logo/Crest column */}
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
                        <CustomImage
                            src={content.frontmatter.image}
                            style={{ width: "100%", maxWidth: "300px" }}
                        />
                    </Col>

                    {/* Text column - Restored to Justified/Left Alignment */}
                    <Col xs={12} md={8}>
                        <div className="history-content" style={{ textAlign: "justify" }}>
                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                        </div>
                    </Col>
                </Row>

                {/* Carousel row */}
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