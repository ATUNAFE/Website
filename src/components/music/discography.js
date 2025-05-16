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
                        title {
                            text
                        }
                        watermark
                        color
                        backgroundColor
                        button {
                            text
                            link
                        }
                        cds {
                            name
                            year
                            image
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
                backgroundColor: content.frontmatter.backgroundColor,
                color: content.frontmatter.color
            }}
        >
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
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{content.frontmatter.title.text}</h3>
                </Row>
                <Row className="mb-4">
                    <div style={{ textAlign: "justify" }}>
                        <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </div>
                </Row>
                <Row>
                    {content.frontmatter.cds.map((cd, index) => (
                        <Col
                            key={index}
                            xs={6}
                            md={4}
                            className="d-flex flex-column align-items-center justify-content-start text-center"
                        >
                            <CustomImage
                                src={cd.image}
                                style={{ width: "50%" }}
                            />
                            <div className="mt-3">
                                <h5>{cd.name}</h5>
                                <p>{cd.year}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <h4 className="d-flex align-items-center justify-content-center mt-4">
                        <a
                            href={content.frontmatter.button.link}
                            style={{
                                color: "var(--light-green)",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                            onMouseEnter={e =>
                                (e.target.style.textDecoration = "underline")
                            }
                            onMouseLeave={e => (e.target.style.textDecoration = "none")}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {content.frontmatter.button.text}
                        </a>
                    </h4>
                </Row>
            </Container>
        </div>
    );
};

export default Discography;