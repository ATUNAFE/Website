import React from "react";
import { Container, Row } from "react-bootstrap";

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
        <div
            id={id}
            style={{
                position: "relative",
                backgroundColor: "var(--light-neutral)"
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
                    opacity: 0.05,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{content.frontmatter.title.text}</h3>
                </Row>
                <Row>
                    <div dangerouslySetInnerHTML={{ __html: content.html }} />
                </Row>
                <Row className="justify-content-center align-items-center my-4">
                    <h2 className="text-center">
                        <span>{`${content.frontmatter.weekDays} das ${content.frontmatter.startTime} às ${content.frontmatter.finishTime}`}</span>
                    </h2>
                </Row>
                <Row className="justify-content-center align-items-center mb-4" style={{ fontWeight: "bold" }}>
                    <h2 className="text-center">
                        <span>Aparece na sala </span>
                        <span style={{ color: "var(--light-engineer)" }}>{content.frontmatter.rehearsalRoom}</span>
                        <span> ou na </span>
                        <span style={{ color: "var(--light-engineer)" }}>{content.frontmatter.tunaRoom}</span>
                    </h2>
                </Row>
                <Row className="justify-content-center align-items-center mb-4">
                    <h2 className="text-center">
                        <span>Esperamos por ti!</span>
                    </h2>
                </Row>
            </Container>
        </div>
    );
};

export default Rehearsals;