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
                        title { text }
                        backgroundImage
                        description
                        button { text, link }
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
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
                    zIndex: -2 
                }}
                imgStyle={{
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    height: "100%",
                    width: "100%",
                }}
            />
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%)",
                    zIndex: -1
                }}
            />

            <div className="position-absolute start-50 translate-middle-x" style={{ top: "135px", width: "90%", height: "4px", backgroundColor: "var(--light-engineer)", zIndex: 1 }} />
            <div className="position-absolute start-50 translate-middle-x" style={{ bottom: "60px", width: "90%", height: "4px", backgroundColor: "var(--dark-green)", zIndex: 1 }} />

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
                                fontSize: "calc(1.8rem + 2.5vw)",
                                textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
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
                                color: "var(--light-neutral)",
                                textAlign: "justify",
                                maxWidth: "100%",
                                marginBottom: "0.5rem",
                                fontSize: "1.05rem",
                                textShadow: "1px 1px 4px rgba(0,0,0,0.3)"
                            }}
                        >
                            {content.frontmatter.description}
                        </p>
                        <p
                            className="mt-3"
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            <a
                                href={content.frontmatter.button.link}
                                style={{
                                    color: "var(--light-green)",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                    textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                }}
                                onMouseEnter={e => (e.target.style.textDecoration = "underline")}
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