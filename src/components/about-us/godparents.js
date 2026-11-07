import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";
import CustomHeading from "../custom-heading";

const Godparents = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/godparents/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
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

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div
            id={id}
            data-about-section="padrinhos"
            style={{
                scrollMarginTop: "calc(77px + 56px)",
                position: "relative",
                backgroundColor: "var(--light-neutral)",
            }}
        >
            {content.frontmatter.watermark && (
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
                        opacity: 0.05,
                        filter: "grayscale(100%)",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />
            )}
            <Container
                className="py-4"
                style={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "var(--dark-neutral)",
                }}
            >
                <Row className="align-items-center g-4 g-lg-5">
                    <Col xs={12} md={8}>
                        <CustomHeading>
                            {content.frontmatter.title.text}
                        </CustomHeading>
                        <div className="d-flex d-md-none justify-content-center my-3">
                            <div style={{ maxWidth: "160px", width: "100%" }}>
                                <CustomImage
                                    src={content.frontmatter.image}
                                    alt={
                                        content.frontmatter.title?.text ||
                                        "TEUP"
                                    }
                                    sizes="160px"
                                    style={{ width: "100%", height: "auto" }}
                                    imgStyle={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="html-content"
                            dangerouslySetInnerHTML={{ __html: content.html }}
                        />
                        <div className="pt-4 d-flex justify-content-center">
                            <a
                                href={content.frontmatter.button.link}
                                className="custom-button"
                                style={{ margin: 0, textDecoration: "none" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content.frontmatter.button.text}
                            </a>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="d-none d-md-flex justify-content-center align-items-center"
                    >
                        <div style={{ maxWidth: "200px", width: "100%" }}>
                            <CustomImage
                                src={content.frontmatter.image}
                                alt={content.frontmatter.title?.text || "TEUP"}
                                sizes="(min-width: 768px) 18vw, 160px"
                                style={{ width: "100%", height: "auto" }}
                                imgStyle={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Godparents;
