import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";

const Godparents = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/godparents/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        image
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
        <div id={id} style={{ position: "relative", backgroundColor: "var(--light-neutral)" }}>
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-3">
                    <Col>
                        <h3>{content.frontmatter.title.text}</h3>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={8} className="mb-4 mb-md-0">
                        <div style={{ textAlign: "justify" }}>
                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                        </div>
                        <div className="mt-4 text-center text-md-start">
                            <h2>
                                <a
                                    href={content.frontmatter.button.link}
                                    style={{ color: "var(--light-green)", textDecoration: "none" }}
                                    onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                                    onMouseLeave={e => (e.target.style.textDecoration = "none")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {content.frontmatter.button.text}
                                </a>
                            </h2>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-flex justify-content-center">
                        <div style={{ maxWidth: "250px", width: "100%" }}>
                            <CustomImage src={content.frontmatter.image} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Godparents;
