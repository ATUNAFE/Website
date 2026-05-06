import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";

const Rehearsals = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/rehearsals/"}}}) {
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

    const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div id={id} style={{ position: "relative", backgroundColor: "var(--light-neutral)", overflow: "hidden" }}>
            <CustomImage
                src={content.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "clamp(150px, 20%, 400px)",
                    opacity: 0.05,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <Col><h3>{content.frontmatter.title.text}</h3></Col>
                </Row>
                <Row className="my-3">
                    <Col><div dangerouslySetInnerHTML={{ __html: content.html }} /></Col>
                </Row>
                <Row className="text-center my-4">
                    <Col>
                        <h2 style={{ fontSize: "calc(1.2rem + 1vw)" }}>
                            {`${content.frontmatter.weekDays} das ${content.frontmatter.startTime} às ${content.frontmatter.finishTime}`}
                        </h2>
                    </Col>
                </Row>
                <Row className="text-center mb-4" style={{ fontWeight: "bold" }}>
                    <Col>
                        <h2 style={{ fontSize: "calc(1.2rem + 1vw)" }}>
                            Aparece na sala <span style={{ color: "var(--light-engineer)" }}>{content.frontmatter.rehearsalRoom}</span> ou na <span style={{ color: "var(--light-engineer)" }}>{content.frontmatter.tunaRoom}</span>
                        </h2>
                    </Col>
                </Row>
                <Row className="text-center mb-4">
                    <Col>
                        <h2 style={{ fontSize: "calc(1.2rem + 1vw)" }}>Esperamos por ti!</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Rehearsals;