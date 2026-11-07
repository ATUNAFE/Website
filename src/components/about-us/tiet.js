import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";
import CustomHeading from "../custom-heading";

const TIET = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/tiet/" } } }
            ) {
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

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div
            id={id}
            data-about-section="tudo-isto-e-tuna"
            style={{
                scrollMarginTop: "calc(77px + 56px)",
                position: "relative",
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            <CustomImage
                src={content.frontmatter.watermark}
                sizes="20vw"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "20%",
                    maxWidth: "220px",
                    opacity: 0.03,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container
                className="py-4"
                style={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Row>
                    <Col>
                        <CustomHeading background="dark">
                            {content.frontmatter.title.text}
                        </CustomHeading>
                    </Col>
                </Row>
                <Row className="align-items-center g-4">
                    <Col
                        xs={12}
                        md={4}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div style={{ width: "100%", maxWidth: "260px" }}>
                            <CustomImage
                                src={content.frontmatter.image}
                                alt={
                                    content.frontmatter.title?.text ||
                                    "Tudo Isto É Tuna"
                                }
                                sizes="(min-width: 768px) 25vw, 70vw"
                                style={{ width: "100%", height: "auto" }}
                                imgStyle={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-center"
                    >
                        <div
                            className="html-content"
                            style={{ color: "var(--light-neutral)" }}
                            dangerouslySetInnerHTML={{ __html: content.html }}
                        />
                        <div className="d-flex justify-content-center mt-4">
                            <Button
                                className="custom-button"
                                onClick={() =>
                                    navigate(content.frontmatter.button.link)
                                }
                            >
                                {content.frontmatter.button.text}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TIET;
