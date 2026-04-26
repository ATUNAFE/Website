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
                // minHeight to ensure it grows with content
                minHeight: "fit-content", 
                display: "flex",
                alignItems: "center"
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
            {/* Changed py-4 to py-5 for more vertical spacing */}
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="text-center mb-3">
                    <Col>
                        <h3>{content.frontmatter.title.text}</h3>
                    </Col>
                </Row>

                <Row className="mb-5 text-center">
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </Col>
                </Row>

                {/* Added justify-content-center and gy-4 for mobile spacing */}
                <Row className="justify-content-center gy-4">
                    {content.frontmatter.buttons.map((button, index) => (
                        <Col
                            key={index}
                            xs={10} // Wider on mobile
                            sm={6}  
                            md={4}  // Side by side on desktop
                            className="d-flex justify-content-center"
                        >
                            <Button
                                className="custom-button"
                                onClick={() => navigate(button.link)}
                                style={{
                                    height: "70px",
                                    width: "100%", // Let the Column control the width
                                    maxWidth: "250px", // Prevents the button from being too wide on large screens
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <h5 className="button-text m-0">{button.text}</h5>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllMembers;