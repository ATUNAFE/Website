import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";
import CustomHeading from "../custom-heading";

const Rehearsals = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/rehearsals/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
                        weekDays
                        rehearsalRoom
                        tunaRoom
                        startTime
                        finishTime
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
            data-about-section="ensaios"
            style={{
                scrollMarginTop: "calc(77px + 56px)",
                position: "relative",
                backgroundColor: "var(--light-neutral)",
                color: "var(--dark-neutral)",
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
                    opacity: 0.05,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container
                className="py-5"
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
                        <CustomHeading>
                            {content.frontmatter.title.text}
                        </CustomHeading>
                    </Col>
                </Row>
                <Row>
                    <div
                        className="html-content"
                        style={{ color: "var(--dark-neutral)" }}
                        dangerouslySetInnerHTML={{ __html: content.html }}
                    />
                </Row>
                <Row className="justify-content-center mb-2">
                    <Col xs={12}>
                        <div
                            className="text-center"
                            style={{
                                marginTop: "1.5rem",
                                fontSize: "1.2rem",
                                lineHeight: 1.5,
                            }}
                        >
                            <div style={{ fontWeight: 600 }}>
                                {content.frontmatter.weekDays}
                            </div>
                            <div style={{ marginTop: "0.15rem" }}>
                                {content.frontmatter.startTime}–
                                {content.frontmatter.finishTime}
                            </div>
                            <div
                                style={{
                                    marginTop: "0.9rem",
                                    color: "inherit",
                                }}
                            >
                                Sala{" "}
                                <span
                                    style={{
                                        color: "var(--light-engineer)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {content.frontmatter.rehearsalRoom}
                                </span>{" "}
                                ou{" "}
                                <span
                                    style={{
                                        color: "var(--light-engineer)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {content.frontmatter.tunaRoom}
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3 mb-2">
                    <Col xs="auto">
                        <p
                            className="text-center m-0"
                            style={{
                                fontStyle: "italic",
                                fontSize: "1.05rem",
                                opacity: 0.7,
                            }}
                        >
                            Esperamos por ti!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Rehearsals;
