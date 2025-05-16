import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const FollowUsSection = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(filter: {frontmatter: {id: {regex: "/followUsSection/"}}}) {
                nodes {
                    frontmatter {
                        id
                        title {
                            text
                        }
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
        <Container
            id={id}
            fluid
            className="d-flex justify-content-center align-items-center py-5"
            style={{
                backgroundColor: "var(--light-engineer)",
                color: "var(--light-neutral)",
            }}
        >
            <Row className="w-100 align-items-center justify-content-center">
                <Col
                    xs="auto"
                    className="d-flex align-items-center justify-content-center"
                >
                    <h4 className="mb-0">
                        {content.frontmatter.title.text}{" "}
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

export default FollowUsSection;