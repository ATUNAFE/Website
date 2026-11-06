import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomImage from "../images/image";
import CustomHeading from "../custom-heading";
import * as styles from "../../style/discography.module.css";

const Discography = ({ id }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/discography/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        watermark
                        color
                        backgroundColor
                        cds {
                            name
                            year
                            image
                            spotifyId
                        }
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) {
        return (
            <Container className="py-5">
                <p className="mb-0">Conteúdo não encontrado para “{id}”.</p>
            </Container>
        );
    }

    const { title, watermark, color, backgroundColor } = content.frontmatter;

    const albums = content.frontmatter.cds ?? [];
    const currentIndex = albums.length ? activeIndex % albums.length : 0;
    const activeCd = albums[currentIndex];

    const selectPrevious = () => {
        if (albums.length < 2) return;

        setActiveIndex(index => (index - 1 + albums.length) % albums.length);
    };

    const selectNext = () => {
        if (albums.length < 2) return;

        setActiveIndex(index => (index + 1) % albums.length);
    };

    return (
        <section
            id={id}
            className="position-relative overflow-hidden"
            style={{ backgroundColor, color }}
        >
            {watermark && (
                <div className={styles.watermark} aria-hidden="true">
                    <CustomImage
                        src={watermark}
                        sizes="280px"
                        style={{ width: "100%" }}
                    />
                </div>
            )}

            <Container
                className="position-relative pt-4 pb-5"
                style={{ zIndex: 1 }}
            >
                <Row>
                    <Col>
                        <CustomHeading>{title.text}</CustomHeading>
                    </Col>
                </Row>

                {content.html && (
                    <Row className="mb-4">
                        <Col xs={12} lg={8}>
                            <div
                                className="lh-lg text-start"
                                dangerouslySetInnerHTML={{
                                    __html: content.html,
                                }}
                            />
                        </Col>
                    </Row>
                )}

                {albums.length > 0 && (
                    <>
                        <div
                            className={styles.carousel}
                            role="region"
                            aria-label="Álbuns da discografia"
                        >
                            <div className={styles.stage}>
                                {albums.map((cd, index) => {
                                    const offset =
                                        (index - currentIndex + albums.length) %
                                        albums.length;

                                    const isActive = offset === 0;

                                    const isHidden =
                                        offset !== 0 &&
                                        offset !== 1 &&
                                        offset !== albums.length - 1;

                                    const positionClass = isActive
                                        ? styles.active
                                        : offset === 1
                                        ? styles.next
                                        : offset === albums.length - 1
                                        ? styles.previous
                                        : styles.hidden;

                                    return (
                                        <button
                                            key={
                                                cd.spotifyId ||
                                                `${cd.name}-${index}`
                                            }
                                            type="button"
                                            className={`${styles.cover} ${positionClass}`}
                                            aria-label={`Selecionar ${cd.name}, ${cd.year}`}
                                            aria-pressed={isActive}
                                            tabIndex={isHidden ? -1 : 0}
                                            onClick={() =>
                                                setActiveIndex(index)
                                            }
                                        >
                                            <img
                                                src={cd.image}
                                                alt=""
                                                loading={
                                                    isActive ? "eager" : "lazy"
                                                }
                                            />
                                        </button>
                                    );
                                })}
                            </div>

                            {albums.length > 1 && (
                                <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
                                    <button
                                        type="button"
                                        className={styles.navigationButton}
                                        aria-label="Álbum anterior"
                                        onClick={selectPrevious}
                                    >
                                        <FaChevronLeft aria-hidden="true" />
                                    </button>

                                    <span className="small">
                                        {currentIndex + 1} / {albums.length}
                                    </span>

                                    <button
                                        type="button"
                                        className={styles.navigationButton}
                                        aria-label="Álbum seguinte"
                                        onClick={selectNext}
                                    >
                                        <FaChevronRight aria-hidden="true" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {activeCd && (
                            <Row className="justify-content-center">
                                <Col xs={12} md={10} lg={7}>
                                    <header
                                        className="text-center mb-4"
                                        aria-live="polite"
                                        aria-atomic="true"
                                    >
                                        <h3 className="h4 mb-1">
                                            {activeCd.name}
                                        </h3>

                                        <p className="small mb-0">
                                            {activeCd.year}
                                        </p>
                                    </header>

                                    {activeCd.spotifyId && (
                                        <div
                                            className={
                                                styles.spotifyListViewport
                                            }
                                        >
                                            <iframe
                                                key={activeCd.spotifyId}
                                                src={`https://open.spotify.com/embed/album/${activeCd.spotifyId}?utm_source=generator`}
                                                title={`Faixas de ${activeCd.name} no Spotify`}
                                                width="100%"
                                                height="552"
                                                className={styles.spotifyPlayer}
                                                loading="lazy"
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        )}
                    </>
                )}
            </Container>
        </section>
    );
};

export default Discography;
