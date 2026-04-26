import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

import CustomImage from "../images/image";

const AllMembers = ({ id }) => {
    const data = useStaticQuery(graphql`
       {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/members/"}}}) {
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
        (node) => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div
            id={id}
            style={{
                position: "relative",
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
                padding: "60px 0"
            }}
        >
            {/* Watermark */}
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

            <Container style={{ position: "relative", zIndex: 2 }}>
                {/* Title */}
                <Row>
                    <Col>
                        <h3>{content.frontmatter.title.text}</h3>
                    </Col>
                </Row>

                {/* Text */}
                <Row className="my-4">
                    <Col>
                        <div
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
                                style={{
                                    height: "70px",
                                    width: "200px",
                                    borderRadius: "15px",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <h5 className="button-text m-0">
                                    {button.text}
                                </h5>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllMembers;