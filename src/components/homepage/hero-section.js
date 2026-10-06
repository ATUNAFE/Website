import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "../../style/hero-section.module.css";

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
        <section
            id={id}
            className={`${styles.heroSection} position-relative d-flex align-items-center overflow-hidden text-white`}
        >
            <div className={`${styles.background} position-absolute`}>
                <CustomImage
                    src={content.frontmatter.backgroundImage}
                    style={{
                        position: "absolute",
                        inset: 0,
                        transform: "scaleX(-1)",
                    }}
                    imgStyle={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </div>

            <div className={`${styles.overlay} position-absolute top-0 start-0 w-100 h-100`} />

            <Container className="position-relative z-1 px-3 px-md-4">
                <Row>
                    <Col
                        xs={12}
                        md={7}
                        className={`${styles.heroContent} d-flex flex-column align-items-center align-items-md-start text-center text-md-start`}
                    >
                        <h1 className={`${styles.title} display-6 fw-bold lh-sm text-white`}>
                            {content.frontmatter.title.text}
                        </h1>

                        <p className={`${styles.description} text-white mb-4`}>
                            {content.frontmatter.description}
                        </p>

                        <Stack
                            direction="horizontal"
                            gap={3}
                            className="flex-wrap justify-content-center justify-content-md-start"
                        >
                            <Button
                                href={content.frontmatter.button.link}
                                variant="primary"
                                className="rounded-pill px-4 py-3 fw-bold"
                            >
                                {content.frontmatter.button.text}
                            </Button>

                            <Button
                                href="/eventos"
                                variant="outline-light"
                                className="rounded-pill px-4 py-3 fw-bold"
                            >
                                Próximos eventos
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;