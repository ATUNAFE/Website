import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

import CustomImage from "../images/image";
import { graphql, useStaticQuery } from "gatsby";
import CustomHeading from "../custom-heading";
import * as styles from "../../style/next-events.module.css";

const NextEvents = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/nextEvents/" } } }
            ) {
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

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );
    const [active, setActive] = useState(0);

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    const events = content.frontmatter.nextEvents ?? [];
    const multi = events.length > 1;
    const button = content.frontmatter.button;
    const buttonIsExternal = button?.link
        ? /^https?:\/\//.test(button.link)
        : false;

    const go = dir => {
        setActive(i => (i + dir + events.length) % events.length);
    };

    const moreLink =
        button?.link &&
        (buttonIsExternal ? (
            <a
                href={button.link}
                className={`d-inline-flex align-items-center gap-2 ${styles.moreLink}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {button.text}
                <FaArrowRight aria-hidden="true" className={styles.moreArrow} />
            </a>
        ) : (
            <Link
                to={button.link}
                className={`d-inline-flex align-items-center gap-2 ${styles.moreLink}`}
            >
                {button.text}
                <FaArrowRight aria-hidden="true" className={styles.moreArrow} />
            </Link>
        ));

    const renderCard = event => {
        const schedule = event.schedule?.length
            ? event.schedule
            : [
                  {
                      date: event.date,
                      title: null,
                      local: event.local,
                  },
              ];

        return (
            <div className={styles.eventCard}>
                <div className="row g-0 align-items-stretch">
                    <div className="col-12 col-md-4">
                        <div className={styles.imageWrap}>
                            <CustomImage
                                src={event.image}
                                alt={event.name}
                                sizes="(min-width: 768px) 280px, 100vw"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "220px",
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
                    </div>

                    <div className="col-12 col-md-8">
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.eventName}>
                                    {event.name}
                                </h3>
                                {event.organization ? (
                                    <p className={styles.organization}>
                                        {event.organization}
                                    </p>
                                ) : null}
                            </div>

                            <div className={styles.schedule}>
                                {schedule.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className={styles.scheduleItem}
                                    >
                                        <div className={styles.scheduleMain}>
                                            <CustomImage
                                                src="pages/eventos-black-filled.png"
                                                alt=""
                                                sizes="18px"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    flexShrink: 0,
                                                    marginTop: "2px",
                                                }}
                                                imgStyle={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <div>
                                                <div className={styles.date}>
                                                    {item.date}
                                                </div>
                                                {item.title ? (
                                                    <div
                                                        className={
                                                            styles.itemTitle
                                                        }
                                                    >
                                                        {item.title}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                        {item.local ? (
                                            <div className={styles.local}>
                                                <CustomImage
                                                    src="pages/local-black.png"
                                                    alt=""
                                                    sizes="16px"
                                                    style={{
                                                        width: "16px",
                                                        height: "16px",
                                                        flexShrink: 0,
                                                    }}
                                                    imgStyle={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                                <span>{item.local}</span>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id={id} style={{ backgroundColor: "var(--light-neutral)" }}>
            <Container className="py-5">
                <div className={styles.headerRow}>
                    <CustomHeading className="mb-0">
                        {content.frontmatter.title.text}
                    </CustomHeading>
                    {moreLink ? (
                        <div className={styles.headerLink}>{moreLink}</div>
                    ) : null}
                </div>

                {multi ? (
                    <div
                        className={styles.carousel}
                        aria-roledescription="carousel"
                    >
                        <button
                            type="button"
                            className={`${styles.navButton} ${styles.navPrev}`}
                            aria-label="Evento anterior"
                            onClick={() => go(-1)}
                        >
                            <FaChevronLeft />
                        </button>

                        <div className={styles.viewport}>
                            <div
                                className={styles.track}
                                style={{
                                    transform: `translateX(-${active * 100}%)`,
                                }}
                            >
                                {events.map((event, index) => (
                                    <div
                                        key={event.name ?? index}
                                        className={styles.slide}
                                        aria-hidden={index !== active}
                                    >
                                        <div className={styles.slideInner}>
                                            {renderCard(event)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.navButton} ${styles.navNext}`}
                            aria-label="Próximo evento"
                            onClick={() => go(1)}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                ) : events[0] ? (
                    <div className={styles.single}>
                        <div className={styles.singleSlide}>
                            {renderCard(events[0])}
                        </div>
                    </div>
                ) : null}

                {multi && (
                    <div
                        className={styles.dots}
                        role="tablist"
                        aria-label="Eventos"
                    >
                        {events.map((event, index) => (
                            <button
                                key={event.name ?? index}
                                type="button"
                                role="tab"
                                aria-selected={index === active}
                                aria-label={`Evento ${index + 1}`}
                                className={`${styles.dot}${
                                    index === active
                                        ? ` ${styles.dotActive}`
                                        : ""
                                }`}
                                onClick={() => setActive(index)}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default NextEvents;
