import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomImage from "../images/image";
import Watermark from "../watermark";

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
                overflow: "hidden"
            }}
        >
            <Watermark src={content.frontmatter.watermark} opacity={0.03} />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-3">
                    <Col><h3>{content.frontmatter.title.text}</h3></Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
                        <div style={{ maxWidth: "250px", width: "100%" }}>
                            <CustomImage src={content.frontmatter.image} />
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <div className="text-justify">
                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                        </div>
                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center justify-content-md-start">
                                <Button
                                    className="custom-button w-100"
                                    onClick={() => navigate(`${content.frontmatter.button.link}`)}
                                    style={{
                                        height: "60px",
                                        maxWidth: "300px"
                                    }}
                                >
                                    <h5 className="button-text m-0">{content.frontmatter.button.text}</h5>
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
