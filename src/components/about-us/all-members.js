import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";
import CustomHeading from "../custom-heading";

const AllMembers = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/members/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
                        buttons {
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
            data-about-section="membros"
            style={{
                scrollMarginTop: "calc(77px + 56px)",
                position: "relative",
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            {/* Watermark */}
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
                {/* Title */}
                <Row>
                    <Col>
                        <CustomHeading background="dark">
                            {content.frontmatter.title.text}
                        </CustomHeading>
                    </Col>
                </Row>

                {/* Text */}
                <Row className="my-4">
                    <Col>
                        <div
                            className="html-content"
                            style={{ color: "var(--light-neutral)" }}
                            dangerouslySetInnerHTML={{ __html: content.html }}
                        />
                    </Col>
                </Row>

                {/* Buttons (centered only) */}
                <Row className="justify-content-center mt-4">
                    {content.frontmatter.buttons.map((button, index) => (
                        <Col
                            key={index}
                            xs={12}
                            md={4}
                            className="d-flex justify-content-center mb-3"
                        >
                            <Button
                                className="custom-button"
                                onClick={() => navigate(button.link)}
                                style={{ minWidth: "160px" }}
                            >
                                {button.text}
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllMembers;
