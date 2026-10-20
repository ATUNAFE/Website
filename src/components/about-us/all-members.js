import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import Watermark from "../watermark";

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
                overflow: "hidden"
            }}
        >
            <Watermark src={content.frontmatter.watermark} opacity={0.03} />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-3">
                    <Col>
                        <h3>{content.frontmatter.title.text}</h3>
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </Col>
                </Row>

                <Row className="justify-content-center g-3">
                    {content.frontmatter.buttons.map((button, index) => (
                        <Col
                            key={index}
                            xs={12} 
                            md={6}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Button
                                className="custom-button w-100"
                                onClick={() => navigate(button.link)}
                                style={{
                                    height: "70px",
                                    maxWidth: "350px"
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