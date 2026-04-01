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

                <Row className="my-4">
                    <div dangerouslySetInnerHTML={{ __html: content.html }} />
                </Row>

                <Row>
                    {content.frontmatter.buttons.map((button, index) => (
                        <Col
                            key={index}
                            xs={9}
                            md={6}
                            className="d-flex flex-column justify-content-center align-items-center"
                        >
                            <Button
                                className="custom-button"
                                onClick={() => navigate(button.link)}
                                style={{
                                    height: "70px",
                                    width: "30%"
                                }}
                            >
                                <h5 className="button-text">{button.text}</h5>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllMembers;
