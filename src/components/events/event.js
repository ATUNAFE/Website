import React from "react";
import CustomImage from "../images/image";
import { Container, Row, Col } from "react-bootstrap";
import * as styles from "../../style/event.module.css";

const Event = ({ event, theme }) => {
    if (!event?.frontmatter || !theme) return null;

    const isDark =
        theme.backgroundColor &&
        theme.backgroundColor.toLowerCase() !== "#f0f0f0" &&
        theme.backgroundColor !== "var(--light-neutral)";

    return (
        <article
            className={styles.event}
            data-theme={isDark ? "dark" : "light"}
            style={{
                color: theme.color,
                backgroundColor: theme.backgroundColor,
            }}
        >
            {theme.watermark ? (
                <div className={styles.watermarkWrapper} aria-hidden="true">
                    <CustomImage
                        src={theme.watermark}
                        sizes="(max-width: 768px) 50vw, 320px"
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                        }}
                        imgStyle={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            ) : null}
            <Container className={styles.inner}>
                <Row className="g-3 g-lg-4 align-items-center">
                    <Col xs={12} className="d-md-none">
                        <h3 className={styles.title}>
                            {event.frontmatter.title?.text}
                        </h3>
                    </Col>
                    <Col xs={12} md={5} lg={4} className={styles.mediaCol}>
                        <div className={styles.imageFrame}>
                            <CustomImage
                                src={event.frontmatter.image}
                                alt={event.frontmatter.title?.text || "Evento"}
                                sizes="(min-width: 992px) 340px, (min-width: 768px) 38vw, 92vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                                imgStyle={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                }}
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={8}>
                        <div className={styles.content}>
                            <h3 className={`${styles.title} d-none d-md-block`}>
                                {event.frontmatter.title?.text}
                            </h3>
                            {event.frontmatter.date ? (
                                <p className={styles.date}>
                                    {event.frontmatter.date}
                                </p>
                            ) : null}
                            {event.html ? (
                                <div
                                    className={`${styles.body} html-content`}
                                    dangerouslySetInnerHTML={{
                                        __html: event.html,
                                    }}
                                />
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    );
};

export default Event;
