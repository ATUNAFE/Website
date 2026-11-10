import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomImage from "../images/image";
import MultiImageCarousel from "../carousels/multi-image-carousel";
import { useStaticQuery, graphql } from "gatsby";
import CustomHeading from "../custom-heading";

const History = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/history/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
                        image
                        carousel
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    return (
        <div
            id="historial"
            data-about-section="historial"
            style={{
                scrollMarginTop: "calc(77px + 56px)",
                position: "relative",
                backgroundColor: "var(--light-neutral)",
            }}
        >
            {content.frontmatter.watermark ? (
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                >
                    <CustomImage
                        src={content.frontmatter.watermark}
                        sizes="(max-width: 768px) 50vw, 420px"
                        style={{
                            width: "min(420px, 45vw)",
                            height: "auto",
                            opacity: 0.05,
                            filter: "grayscale(100%)",
                        }}
                        imgStyle={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </div>
            ) : null}
            <Container
                className="py-4"
                style={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "var(--dark-neutral)",
                }}
            >
                <Row>
                    <Col>
                        <CustomHeading>
                            {content.frontmatter.title.text}
                        </CustomHeading>
                    </Col>
                </Row>
                <Row className="align-items-center g-4 g-lg-5">
                    <Col
                        xs={12}
                        md={5}
                        lg={5}
                        className="d-flex justify-content-center"
                    >
                        <div style={{ width: "100%", maxWidth: "360px" }}>
                            <CustomImage
                                src={content.frontmatter.image}
                                alt={content.frontmatter.title.text}
                                sizes="(min-width: 992px) 360px, (min-width: 768px) 38vw, 80vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                                imgStyle={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={7}
                        lg={7}
                        className="d-flex flex-column justify-content-center"
                    >
                        <div
                            className="html-content"
                            style={{ textAlign: "justify" }}
                            dangerouslySetInnerHTML={{ __html: content.html }}
                        />
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col xs={12}>
                        <MultiImageCarousel
                            images={content.frontmatter.carousel}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default History;
