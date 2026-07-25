import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";

const TIET = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/tiet/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        image
                        watermark
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
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            <CustomImage
                src={content.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "20%",
                    opacity: 0.03,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{content.frontmatter.title.text}</h3>
                </Row>
                <Row>
                    <Col
                        xs={6}
                        md={4}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <CustomImage src={content.frontmatter.image} />
                    </Col>
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        <Row>
                            <div style={{ textAlign: "justify" }}>
                                <div dangerouslySetInnerHTML={{ __html: content.html }} />
                            </div>
                        </Row>
                        <Row className="d-flex justify-content-center mt-3">
                            <Col className="d-flex justify-content-center p-0">
                                <Button
                                    className="custom-button"
                                    onClick={() => navigate(`${content.frontmatter.button.link}`)}
                                    style={{
                                        height: "75px",
                                        width: "80%",
                                        minWidth: "150px",
                                        maxWidth: "300px"
                                    }}
                                >
                                    <h5 className="button-text" style={{ margin: 0 }}>{content.frontmatter.button.text}</h5>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TIET;
