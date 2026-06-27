import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";
import Watermark from "../watermark";

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
                color: content.frontmatter.color
            }}
        >
            <Watermark src={content.frontmatter.watermark} />
             <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{content.frontmatter.title.text}</h3>
                </Row>
                <Row className="mb-4">
                    <div style={{ textAlign: "justify" }}>
                        <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </div>
                </Row>
                <Row className="justify-content-center g-4">
                    {content.frontmatter.cds.map((cd, index) => (
                        <Col
                            key={index}
                            xs={6}
                            md={4}
                            className="d-flex flex-column align-items-center text-center"
                        >
                            <CustomImage
                                src={cd.image}
                                style={{ width: "50%" }}
                            />
                            <div className="mt-3">
                                <h5 className="fw-bold">{cd.name}</h5>
                                <p>{cd.year}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col className="text-center mt-4">
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