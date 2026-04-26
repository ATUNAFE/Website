import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";

const HeroSection = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/heroSection/"}}}) {
                nodes {
                    frontmatter {
                        id
                        title {
                        text
                        }
                        backgroundImage
                        description
                        button {
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
                // Use minHeight so the section expands if the window is too short
                minHeight: "100vh", 
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // Add padding so text never overlaps the absolute lines
                paddingTop: "150px", 
                paddingBottom: "80px",
                overflow: "hidden",
            }}
        >
            <CustomImage
                src={content.frontmatter.backgroundImage}
                style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    height: "100%", 
                    width: "100%",
                    zIndex: -1 
                }}
                imgStyle={{
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    height: "100%",
                    width: "100%",
                }}
            />

            {/* Top Line */}
            <div
                className="position-absolute start-50 translate-middle-x"
                style={{
                    top: "135px",
                    width: "90%",
                    height: "4px",
                    backgroundColor: "var(--light-engineer)",
                    zIndex: 1
                }}
            />

            {/* Bottom Line */}
            <div
                className="position-absolute start-50 translate-middle-x"
                style={{
                    bottom: "60px",
                    width: "90%",
                    height: "4px",
                    backgroundColor: "var(--dark-green)",
                    zIndex: 1
                }}
            />

            {/* FIX 3: Removed position-absolute from here to let Flexbox handle centering safely */}
            <Container style={{ position: "relative", zIndex: 2 }}>
                <Row className="text-light">
                    <Col
                        xs={12}
                        md={8}
                        className="d-flex flex-column justify-content-start text-md-start text-center"
                    >
                        <h1
                            style={{
                                fontWeight: "bold",
                                color: "var(--light-neutral)",
                                marginBottom: "1rem",
                                fontSize: "calc(1.5rem + 2vw)" // Responsive font sizing
                            }}
                        >
                            {content.frontmatter.title.text}
                        </h1>
                    </Col>

                    <Col
                        xs={12}
                        md={4}
                        className="d-flex flex-column text-md-start text-center mt-4 mt-md-0"
                        style={{ alignSelf: "flex-end" }}
                    >
                        <p
                            style={{
                                color: "var(--dark-neutral)",
                                textAlign: "justify",
                                maxWidth: "100%",
                                marginBottom: "0.5rem",
                            }}
                        >
                            {content.frontmatter.description}
                        </p>
                        <p
                            className="mt-3"
                            style={{
                                color: "var(--dark-neutral)",
                                fontWeight: "bold",
                            }}
                        >
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
                            >
                                {content.frontmatter.button.text}
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;