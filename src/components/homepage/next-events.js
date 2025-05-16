import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";

const NextEvents = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/nextEvents/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        button {
                            text
                            link
                        }
                        events {
                            name
                            date
                            local
                            organization
                            image
                        }
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <Container
            id={id}
            fluid
            className="py-5"
            style={{
                backgroundColor: "var(--light-neutral)"
            }}
        >
            <Row className="p-4">
                <h3>{content.frontmatter.title.text}</h3>
            </Row>

            <Row>
                {content.frontmatter.events.map((event, index) => (
                    <Col
                        key={index}
                        xs={6}
                        md={4}
                        className="d-flex flex-column align-items-center justify-content-start text-center"
                    >
                        <CustomImage
                            src={event.image}
                            style={{ width: "50%" }}
                        />
                        <div className="mt-3">
                            <h5>{event.name}</h5>
                            <p className="mb-0">{event.date}</p>
                            <p className="mb-0">{event.local}</p>
                            <p>{event.organization}</p>
                        </div>
                    </Col>
                ))}
            </Row>

            <Row
                className="w-100 align-items-center justify-content-center pt-5"
            >
                <Col
                    xs="auto"
                    className="d-flex align-items-center justify-content-center"
                >
                    <h4 className="mb-0">
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
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default NextEvents;