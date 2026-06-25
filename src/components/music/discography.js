import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";

const Discography = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/discography/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title { text }
                        watermark
                        color
                        backgroundColor
                        button { text, link }
                        cds { name, year, image }
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
                backgroundColor: content.frontmatter.backgroundColor,
                color: content.frontmatter.color,
                overflow: "hidden"
            }}
        >
            <CustomImage
                src={content.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "40%",
                    opacity: 0.05,
                    filter: "grayscale(100%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-3">
                    <Col className="text-center text-md-start">
                        <h2 style={{ fontWeight: "bold" }}>{content.frontmatter.title.text}</h2>
                    </Col>
                </Row>
                <Row className="mb-5 justify-content-center justify-content-md-start">
                    <Col xs={12} md={10} lg={8} className="text-center text-md-start">
                        <div style={{ textAlign: "justify" }} className="text-md-start">
                            <div dangerouslySetInnerHTML={{ __html: content.html }} />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center g-4">
                    {content.frontmatter.cds.map((cd, index) => (
                        <Col
                            key={index}
                            xs={6}
                            md={4}
                            className="d-flex flex-column align-items-center text-center"
                        >
                            <div style={{ width: "100%", maxWidth: "150px" }}>
                                <CustomImage src={cd.image} style={{ width: "100%" }} />
                            </div>
                            <div className="mt-3">
                                <h6 className="fw-bold mb-1">{cd.name}</h6>
                                <small style={{ opacity: 0.7 }}>{cd.year}</small>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col className="text-center mt-5">
                        <h4>
                            <a
                                href={content.frontmatter.button.link}
                                style={{
                                    color: "var(--light-green)",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                                onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                                onMouseLeave={e => (e.target.style.textDecoration = "none")}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {content.frontmatter.button.text}
                            </a>
                        </h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Discography;