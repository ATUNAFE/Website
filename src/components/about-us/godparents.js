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
        <div
            id={id}
            style={{
                position: "relative",
                backgroundColor: "var(--light-neutral)",
            }}
        >
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{content.frontmatter.title.text}</h3>
                </Row>
                <Row>
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <Row>
                            <div style={{ textAlign: "justify" }}>
                                <div dangerouslySetInnerHTML={{ __html: content.html }} />
                            </div>{" "}
                        </Row>
                        <Row className="mt-4">
                            <h2>
                                <a
                                    href={content.frontmatter.button.link}
                                    style={{
                                        color: "var(--light-green)",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={e =>
                                        (e.target.style.textDecoration = "underline")
                                    }
                                    onMouseLeave={e => (e.target.style.textDecoration = "none")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {content.frontmatter.button.text}
                                </a>
                            </h2>
                        </Row>
                    </Col>
                    <Col
                        xs={6}
                        md={4}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <CustomImage src={content.frontmatter.image} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Godparents;
