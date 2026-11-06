import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import CustomImage from "./images/image";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "../style/banner.module.css";

const Banner = ({ id }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(null);
    const mobileNavRef = useRef(null);
    const dropdownRefs = useRef([]);
    const programmaticScrollUntil = useRef(0);

    const data = useStaticQuery(graphql`
        {
            banners: allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/banner/" } } }
            ) {
                nodes {
                    frontmatter {
                        id
                        title {
                            text
                            icon
                        }
                        backgroundImage
                        sections {
                            type
                            backgroundColor
                            color
                            items {
                                title
                                icon
                                link
                            }
                            text
                            label
                            source
                        }
                    }
                }
            }
            tietConfig: allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/editions-tiet/" } } }
            ) {
                nodes {
                    frontmatter {
                        id
                        editions
                    }
                }
            }
            tietEditions: allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/edition-/" } } }
            ) {
                nodes {
                    frontmatter {
                        id
                        title {
                            text
                        }
                    }
                }
            }
        }
    `);

    const content = data.banners.nodes.find(node => node.frontmatter.id === id);

    const editionItems = (() => {
        const config = data.tietConfig.nodes.find(
            node => node.frontmatter.id === "editions-tiet"
        );
        if (!config?.frontmatter?.editions) return [];
        return config.frontmatter.editions
            .map(editionId =>
                data.tietEditions.nodes.find(
                    edition => edition.frontmatter.id === editionId
                )
            )
            .filter(Boolean)
            .map(edition => ({
                id: edition.frontmatter.id,
                title:
                    (
                        edition.frontmatter.title?.text ||
                        edition.frontmatter.id
                    ).replace(/^.*?([IVXLCDM]+)\b.*$/i, "$1") ||
                    edition.frontmatter.title?.text,
            }));
    })();

    useEffect(() => {
        const navSection = content?.frontmatter.sections?.find(
            s => s.type === "navigation"
        );
        const sectionIds =
            navSection?.items?.map(i => i.link).filter(Boolean) ?? [];
        if (sectionIds.length === 0) return;

        setActiveSection(sectionIds[0]);

        const getStickyOffset = () => {
            const nav = document.querySelector("[data-section-nav]");
            const navH =
                nav?.getBoundingClientRect().height ?? nav?.offsetHeight ?? 0;
            return 77 + navH;
        };

        const handleScroll = () => {
            if (Date.now() < programmaticScrollUntil.current) return;
            const offset = getStickyOffset();
            const scrollingEl =
                document.scrollingElement ?? document.documentElement;
            const atBottom =
                window.innerHeight + window.pageYOffset >=
                scrollingEl.scrollHeight - 8;
            let current = sectionIds[0];

            sectionIds.forEach((sid, idx) => {
                const el = document.getElementById(sid);
                if (!el) return;
                const top = el.getBoundingClientRect().top;
                const isLast = idx === sectionIds.length - 1;
                if (isLast && atBottom) {
                    current = sid;
                    return;
                }
                if (top <= offset + 4) current = sid;
            });

            setActiveSection(current);

            const navEl = document.querySelector("[data-section-nav]");
            if (navEl) {
                const isStuck = navEl.getBoundingClientRect().top <= 78;
                document.documentElement.classList.toggle(
                    "nav-active",
                    isStuck
                );
            } else {
                document.documentElement.classList.remove("nav-active");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.classList.remove("nav-active");
        };
    }, [content]);

    useEffect(() => {
        if (!content?.frontmatter.sections?.some(s => s.type === "dropdown"))
            return;
        if (editionItems.length === 0) return;

        const ids = editionItems.map(i => i.id);
        setDropdownActive(prev => (prev && ids.includes(prev) ? prev : ids[0]));

        const getStickyOffset = () => {
            const nav = document.querySelector("[data-section-nav]");
            const navH =
                nav?.getBoundingClientRect().height ?? nav?.offsetHeight ?? 0;
            return 77 + navH;
        };

        const handleScroll = () => {
            if (Date.now() < programmaticScrollUntil.current) return;
            const offset = getStickyOffset();
            let current = ids[0];
            ids.forEach(sid => {
                const el = document.getElementById(sid);
                if (!el) return;
                if (el.getBoundingClientRect().top <= offset + 4) current = sid;
            });
            setDropdownActive(current);
            const navEl = document.querySelector("[data-section-nav]");
            if (navEl) {
                const isStuck = navEl.getBoundingClientRect().top <= 78;
                document.documentElement.classList.toggle(
                    "nav-active",
                    isStuck
                );
            } else {
                document.documentElement.classList.remove("nav-active");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.classList.remove("nav-active");
        };
    }, [content, editionItems]);

    useEffect(() => {
        if (!mobileOpen) return;
        const onDown = e => {
            if (!mobileNavRef.current?.contains(e.target)) setMobileOpen(false);
        };
        const onKey = e => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        document.addEventListener("touchstart", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("touchstart", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [mobileOpen]);

    if (!content) return <p>⚠️ Content not found for "{id}".</p>;

    const getStickyOffset = () => {
        const nav = document.querySelector("[data-section-nav]");
        const navH =
            nav?.getBoundingClientRect().height ?? nav?.offsetHeight ?? 0;
        return 77 + navH;
    };

    const scrollTo = link => {
        const doScroll = behavior => {
            const el = document.getElementById(link);
            if (!el) return;
            const scrollingEl =
                document.scrollingElement ?? document.documentElement;
            const maxTop = Math.max(
                0,
                scrollingEl.scrollHeight - window.innerHeight
            );
            const y =
                el.getBoundingClientRect().top +
                window.pageYOffset -
                getStickyOffset() +
                3;
            const target = Math.max(0, Math.min(Math.round(y), maxTop));
            scrollingEl.scrollTo({
                top: target,
                behavior,
            });
            const navEl = document.querySelector("[data-section-nav]");
            if (navEl) {
                document.documentElement.classList.toggle(
                    "nav-active",
                    navEl.getBoundingClientRect().top <= 78 || target > 0
                );
            }
        };
        setMobileOpen(false);
        setDropdownOpen(false);
        document.documentElement.classList.add("nav-active");
        programmaticScrollUntil.current = Date.now() + 1400;
        setActiveSection(link);
        setDropdownActive(link);
        doScroll("auto");
        window.setTimeout(() => doScroll("auto"), 80);
        window.setTimeout(() => doScroll("auto"), 250);
        window.setTimeout(() => doScroll("auto"), 500);
        window.setTimeout(() => doScroll("auto"), 900);
        window.setTimeout(() => {
            programmaticScrollUntil.current = 0;
            window.dispatchEvent(new Event("scroll"));
        }, 950);
    };

    return (
        <>
            <div
                data-banner-hero="true"
                style={{
                    position: "relative",
                    height: "50vh",
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                <CustomImage
                    src={content.frontmatter.backgroundImage}
                    className="critical-image"
                    priority
                    sizes="100vw"
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{
                        objectFit: "cover",
                        objectPosition: "bottom",
                        height: "100%",
                        width: "100%",
                    }}
                />

                <div
                    className="position-absolute w-100"
                    style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: "0 20px",
                    }}
                >
                    <Container>
                        <Row className="align-items-center justify-content-center text-center">
                            <Col
                                xs="auto"
                                className="d-flex align-items-center gap-3"
                            >
                                <CustomImage
                                    src={content.frontmatter.title.icon}
                                    loading="eager"
                                    sizes="100px"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                        color: "var(--light-neutral)",
                                        margin: 0,
                                    }}
                                >
                                    {content.frontmatter.title.text}
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {content.frontmatter.sections.map((section, index) =>
                section.type === "navigation" ? (
                    <nav
                        key={index}
                        className={styles.stickyNav}
                        style={{
                            backgroundColor: section.backgroundColor,
                            color: section.color,
                        }}
                        data-section-nav="true"
                        aria-label="Navegação por secções"
                    >
                        <div className={styles.navTrack}>
                            <div className={styles.navInner}>
                                {section.items.map((item, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`${styles.navTab} ${
                                            activeSection === item.link
                                                ? styles.navTabActive
                                                : ""
                                        }`}
                                        onClick={() => scrollTo(item.link)}
                                        aria-current={
                                            activeSection === item.link
                                                ? "true"
                                                : undefined
                                        }
                                    >
                                        <CustomImage
                                            src={item.icon}
                                            sizes="24px"
                                            className={styles.navIcon}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                            }}
                                            imgStyle={{ objectFit: "contain" }}
                                        />
                                        <span>{item.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div
                            className={styles.mobileNav}
                            ref={mobileNavRef}
                            style={{ "--nav-bg": section.backgroundColor }}
                        >
                            <button
                                type="button"
                                className={styles.mobileToggle}
                                aria-haspopup="listbox"
                                aria-expanded={mobileOpen}
                                aria-label="Navegar para uma secção"
                                onClick={() => setMobileOpen(v => !v)}
                            >
                                {(() => {
                                    const current =
                                        section.items.find(
                                            item => item.link === activeSection
                                        ) ?? section.items[0];
                                    return current ? (
                                        <>
                                            <CustomImage
                                                src={current.icon}
                                                sizes="22px"
                                                className={
                                                    styles.mobileToggleIcon
                                                }
                                                style={{
                                                    width: "22px",
                                                    height: "22px",
                                                }}
                                                imgStyle={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <span
                                                className={
                                                    styles.mobileToggleLabel
                                                }
                                            >
                                                {current.title}
                                            </span>
                                        </>
                                    ) : null;
                                })()}
                                <FaChevronDown
                                    className={`${styles.mobileChevron}${
                                        mobileOpen
                                            ? ` ${styles.mobileChevronOpen}`
                                            : ""
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                            {mobileOpen && (
                                <div
                                    className={styles.mobileMenu}
                                    role="listbox"
                                    style={{
                                        backgroundColor:
                                            section.backgroundColor,
                                        color: section.color,
                                    }}
                                >
                                    {section.items.map((item, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            role="option"
                                            aria-selected={
                                                activeSection === item.link
                                            }
                                            className={`${styles.mobileOption}${
                                                activeSection === item.link
                                                    ? ` ${styles.mobileOptionActive}`
                                                    : ""
                                            }`}
                                            onClick={() => scrollTo(item.link)}
                                        >
                                            <CustomImage
                                                src={item.icon}
                                                sizes="20px"
                                                className={styles.navIcon}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                }}
                                                imgStyle={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <span>{item.title}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                ) : section.type === "dropdown" ? (
                    (() => {
                        const items =
                            section.source === "tiet-editions"
                                ? editionItems
                                : [];
                        if (items.length === 0) return null;
                        const isOpen = dropdownOpen === index;
                        const current =
                            items.find(item => item.id === dropdownActive) ??
                            items[0];
                        return (
                            <nav
                                key={index}
                                className={styles.stickyNav}
                                style={{
                                    backgroundColor: section.backgroundColor,
                                    color: section.color,
                                }}
                                data-section-nav="true"
                                aria-label={section.label || "Navegação"}
                            >
                                <div
                                    className={styles.dropdownBar}
                                    ref={el => {
                                        dropdownRefs.current[index] = el;
                                    }}
                                >
                                    {section.text ? (
                                        <span className={styles.dropdownLabel}>
                                            {section.text}
                                        </span>
                                    ) : null}
                                    <div className={styles.dropdownControl}>
                                        <button
                                            type="button"
                                            className={styles.dropdownToggle}
                                            aria-haspopup="listbox"
                                            aria-expanded={isOpen}
                                            aria-label={
                                                section.label ||
                                                "Navegar para uma edição"
                                            }
                                            onClick={() =>
                                                setDropdownOpen(v =>
                                                    v === index ? false : index
                                                )
                                            }
                                        >
                                            <span
                                                className={styles.dropdownValue}
                                            >
                                                {current?.title}
                                            </span>
                                            <FaChevronDown
                                                className={`${
                                                    styles.mobileChevron
                                                }${
                                                    isOpen
                                                        ? ` ${styles.mobileChevronOpen}`
                                                        : ""
                                                }`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                        {isOpen && (
                                            <div
                                                className={styles.dropdownMenu}
                                                role="listbox"
                                                style={{
                                                    backgroundColor:
                                                        section.backgroundColor,
                                                    color: section.color,
                                                }}
                                            >
                                                {items.map(item => (
                                                    <button
                                                        key={item.id}
                                                        type="button"
                                                        role="option"
                                                        aria-selected={
                                                            dropdownActive ===
                                                            item.id
                                                        }
                                                        className={`${
                                                            styles.mobileOption
                                                        }${
                                                            dropdownActive ===
                                                            item.id
                                                                ? ` ${styles.mobileOptionActive}`
                                                                : ""
                                                        }`}
                                                        onClick={() => {
                                                            setDropdownActive(
                                                                item.id
                                                            );
                                                            scrollTo(item.id);
                                                        }}
                                                    >
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        );
                    })()
                ) : section.type === "text" ? (
                    <Container
                        key={index}
                        fluid
                        className="d-flex justify-content-center align-items-center py-3"
                        style={{
                            backgroundColor: section.backgroundColor,
                            color: section.color,
                        }}
                    >
                        <h3
                            className="m-0"
                            style={{
                                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                            }}
                        >
                            {section.text}
                        </h3>
                    </Container>
                ) : null
            )}
        </>
    );
};

export default Banner;
