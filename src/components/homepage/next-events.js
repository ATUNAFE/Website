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
                        nextEvents {
                            name
                            organization
                            image
                            schedule {
                                date
                                title
                                local
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.id === id);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    const events = content.frontmatter.nextEvents;

    return (
        <Container
            id={id}
            fluid
            className="py-5"
            style={{
                backgroundColor: "var(--light-neutral)"
            }}
        >
            <Row className="pb-5 px-3 px-md-4 text-center">
                <Col>
                    <h3>
                        {content.frontmatter.title.text}
                    </h3>
                    <div 
                        className="mx-auto mt-2" 
                        style={{ width: "50px", height: "3px", backgroundColor: "var(--light-green)", borderRadius: "2px" }}
                    />
                </Col>
            </Row>

            <Container>
                <Row className="g-4 justify-content-center">
                    {events.map((event, index) => {
                        const schedule = event.schedule?.length
                            ? event.schedule
                            : [{
                                date: event.date,
                                title: null,
                                local: event.local,
                            }];

                        return (
                            <Col xs={12} lg={10} xl={8} key={event.name ?? index}>
                                <div 
                                    className="bg-white rounded-4 border p-4 p-md-5"
                                    style={{ 
                                        margin: "0 auto",
                                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                                        borderColor: "var(--dark-neutral)",
                                    }}
                                >
                                    <Row className="g-4 align-items-center">

                                        <Col xs={12} md={5} lg={5} className="text-center">
                                            <div className="position-relative overflow-hidden rounded-3 shadow-sm mx-auto" style={{ maxWidth: "280px" }}>
                                                <CustomImage
                                                    src={event.image}
                                                    alt={event.name}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        display: "block",
                                                    }}
                                                    imgStyle={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        objectPosition: "center",
                                                    }}
                                                />
                                            </div>
                                        </Col>

                                        <Col xs={12} md={7} lg={7}>
                                            <div className="ps-md-3">
                                                <h3 className="fw-bold fs-2 mb-1 text-dark">
                                                    {event.name}
                                                </h3>

                                                <p className="text-muted fst-italic mb-4">
                                                    {event.organization}
                                                </p>

                                                <div className="d-flex flex-column gap-3">
                                                    {schedule.map((item, itemIndex) => (
                                                        <div
                                                            key={itemIndex}
                                                            className={`pb-3 ${itemIndex !== schedule.length - 1 ? 'border-bottom' : ''}`}
                                                        >
                                                            <Row className="g-2 align-items-center">

                                                                <Col xs={12} sm={7}>
                                                                    <div className="d-flex align-items-start gap-2">
                                                                        <CustomImage
                                                                            src="pages/eventos-black-filled.png"
                                                                            alt=""
                                                                            style={{
                                                                                width: "18px",
                                                                                height: "18px",
                                                                                flexShrink: 0,
                                                                                marginTop: "3px"
                                                                            }}
                                                                            imgStyle={{
                                                                                objectFit: "contain",
                                                                            }}
                                                                        />
                                                                        <div>
                                                                            <span className="fw-bold text-dark d-block">
                                                                                {item.date}
                                                                            </span>
                                                                            {item.title && (
                                                                                <span className="text-muted small d-block">
                                                                                    {item.title}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col xs={12} sm={5}>
                                                                    <div className="d-flex align-items-center gap-2 text-secondary">
                                                                        <CustomImage
                                                                            src="pages/local-black.png"
                                                                            alt=""
                                                                            style={{
                                                                                width: "18px",
                                                                                height: "18px",
                                                                                flexShrink: 0,
                                                                            }}
                                                                            imgStyle={{
                                                                                objectFit: "contain",
                                                                            }}
                                                                        />
                                                                        <span className="small fw-medium">{item.local}</span>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <Row className="w-100 align-items-center justify-content-center pt-5 m-0">
                <Col xs="auto">
                    <a
                        href={content.frontmatter.button.link}
                        className="btn px-4 py-2 rounded-pill fw-bold shadow-sm"
                        style={{
                            backgroundColor: "var(--light-green)",
                            color: "var(--light-neutral)",
                            border: "none",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.9";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        {content.frontmatter.button.text}
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default NextEvents;