import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Col, Row, Container } from "react-bootstrap";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Location } from "@reach/router";
import { FaBars } from "react-icons/fa";

import HeaderLink from "./header-link";
import CustomImage from "../images/image";
import * as styles from "../../style/header.module.css";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const closeDropdownTimeout = useRef(null);

    const data = useStaticQuery(graphql`
        {
            markdownRemark(frontmatter: { id: { regex: "/header/" } }) {
                frontmatter {
                    id
                    title {
                        text
                    }
                    image
                    backgroundColor
                    color
                    menu {
                        type
                        text
                        link
                        items {
                            text
                            link
                        }
                    }
                }
            }
        }
    `);

    const content = data.markdownRemark;

    const openDropdownMenu = link => {
        clearTimeout(closeDropdownTimeout.current);
        setOpenDropdown(link);
    };

    const scheduleDropdownClose = () => {
        clearTimeout(closeDropdownTimeout.current);
        closeDropdownTimeout.current = setTimeout(
            () => setOpenDropdown(null),
            200
        );
    };

    const toggleDropdown = (link, show) => {
        clearTimeout(closeDropdownTimeout.current);
        setOpenDropdown(show ? link : null);
    };

    useEffect(() => () => clearTimeout(closeDropdownTimeout.current), []);

    if (!content) return <p>⚠️ Content not found for header.</p>;

    return (
        <Location>
            {({ location }) => (
                <header className={styles.header}>
                    <Container
                        fluid
                        style={{ margin: "0", padding: "0", width: "100%" }}
                    >
                        <Row
                            style={{
                                margin: "0",
                                padding: "0",
                                height: "77px",
                                width: "100%",
                                position: "fixed",
                                backgroundColor:
                                    content.frontmatter.backgroundColor,
                                "--header-background":
                                    content.frontmatter.backgroundColor,
                                color: content.frontmatter.color,
                                zIndex: 1100,
                                transition: "backgroundColor 0.5s ease",
                            }}
                        >
                            <Col
                                className="d-flex align-items-center"
                                style={{
                                    padding: "0.5rem",
                                    height: "77px",
                                }}
                            >
                                <Link
                                    to="/"
                                    className={`d-flex align-items-center ${styles.logoLink}`}
                                    onClick={event => {
                                        if (
                                            event.button !== 0 ||
                                            event.metaKey ||
                                            event.ctrlKey ||
                                            event.shiftKey ||
                                            event.altKey
                                        ) {
                                            return;
                                        }

                                        if (window.location.pathname === "/") {
                                            event.preventDefault();
                                        }

                                        if (document.activeElement?.blur) {
                                            try {
                                                document.activeElement.blur();
                                            } catch (_) {}
                                        }
                                        const w = document.getElementById(
                                            "gatsby-focus-wrapper"
                                        );
                                        if (w) {
                                            if (!w.hasAttribute("tabindex"))
                                                w.setAttribute(
                                                    "tabindex",
                                                    "-1"
                                                );
                                            try {
                                                w.focus({
                                                    preventScroll: true,
                                                });
                                            } catch (_) {}
                                        }
                                        const scroller =
                                            document.scrollingElement ??
                                            document.documentElement;
                                        const prev =
                                            scroller.style.scrollBehavior;
                                        document.documentElement.classList.remove(
                                            "nav-active"
                                        );
                                        document.documentElement.style.setProperty(
                                            "scroll-padding-top",
                                            "0px",
                                            "important"
                                        );
                                        document.documentElement.style.setProperty(
                                            "scroll-behavior",
                                            "auto",
                                            "important"
                                        );
                                        scroller.style.scrollBehavior = "auto";
                                        scroller.scrollTop = 0;
                                        if (document.body)
                                            document.body.scrollTop = 0;
                                        window.scrollTo(0, 0);
                                        scroller.style.scrollBehavior = prev;
                                        [0, 50, 120, 250].forEach(ms =>
                                            window.setTimeout(() => {
                                                scroller.scrollTop = 0;
                                                window.scrollTo(0, 0);
                                                if (ms >= 120) {
                                                    document.documentElement.style.removeProperty(
                                                        "scroll-padding-top"
                                                    );
                                                    document.documentElement.style.removeProperty(
                                                        "scroll-behavior"
                                                    );
                                                }
                                            }, ms)
                                        );
                                    }}
                                >
                                    <CustomImage
                                        src={content.frontmatter.image}
                                        alt="TUNAFE"
                                        sizes="90px"
                                        style={{
                                            width: "90px",
                                            margin: "0",
                                        }}
                                        imgStyle={{
                                            objectFit: "contain",
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    />
                                </Link>
                            </Col>
                            <Col></Col>
                            <Col id="siteMenu" className={styles.siteMenu}>
                                {content.frontmatter.menu.map(
                                    (section, index) => {
                                        const sectionActive =
                                            section.type === "dropdown" &&
                                            location.pathname.startsWith(
                                                section.link
                                            );

                                        return section.type === "link" ? (
                                            <HeaderLink
                                                key={index}
                                                link={section.link}
                                                context={section.text}
                                            />
                                        ) : section.type === "dropdown" ? (
                                            <Dropdown
                                                key={section.link}
                                                show={
                                                    openDropdown ===
                                                    section.link
                                                }
                                                onToggle={show =>
                                                    toggleDropdown(
                                                        section.link,
                                                        show
                                                    )
                                                }
                                                onMouseEnter={() =>
                                                    openDropdownMenu(
                                                        section.link
                                                    )
                                                }
                                                onMouseLeave={
                                                    scheduleDropdownClose
                                                }
                                            >
                                                <Dropdown.Toggle
                                                    as={Link}
                                                    to={section.link}
                                                    className={`${
                                                        styles.dropdownToggle
                                                    }${
                                                        sectionActive
                                                            ? ` ${styles.dropdownToggleActive}`
                                                            : ""
                                                    }`}
                                                    aria-current={
                                                        sectionActive
                                                            ? "page"
                                                            : undefined
                                                    }
                                                    onClick={() =>
                                                        setOpenDropdown(null)
                                                    }
                                                >
                                                    {section.text}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu
                                                    align="start"
                                                    className={
                                                        styles.dropdownMenu
                                                    }
                                                    popperConfig={{
                                                        modifiers: [
                                                            {
                                                                name: "offset",
                                                                options: {
                                                                    offset: [
                                                                        0, 0,
                                                                    ],
                                                                },
                                                            },
                                                        ],
                                                    }}
                                                    onMouseEnter={() =>
                                                        openDropdownMenu(
                                                            section.link
                                                        )
                                                    }
                                                    onMouseLeave={
                                                        scheduleDropdownClose
                                                    }
                                                >
                                                    {section.items.map(item => (
                                                        <Dropdown.Item
                                                            key={item.link}
                                                            className={
                                                                styles.dropdownItem
                                                            }
                                                            href={item.link}
                                                            onClick={event => {
                                                                setOpenDropdown(
                                                                    null
                                                                );
                                                                const [
                                                                    path,
                                                                    hash = "",
                                                                ] = (
                                                                    item.link ||
                                                                    ""
                                                                ).split("#");
                                                                if (!hash)
                                                                    return;
                                                                event.preventDefault();
                                                                const cleanPath =
                                                                    path ||
                                                                    "/sobre-nos";
                                                                const align =
                                                                    () => {
                                                                        const el =
                                                                            document.getElementById(
                                                                                hash
                                                                            );
                                                                        if (!el)
                                                                            return false;
                                                                        const nav =
                                                                            document.querySelector(
                                                                                "[data-section-nav]"
                                                                            );
                                                                        const navH =
                                                                            nav?.getBoundingClientRect()
                                                                                .height ??
                                                                            nav?.offsetHeight ??
                                                                            0;
                                                                        const heading =
                                                                            el.querySelector(
                                                                                "h3, h2, h4"
                                                                            );
                                                                        const base =
                                                                            heading ??
                                                                            el;
                                                                        const y =
                                                                            base.getBoundingClientRect()
                                                                                .top +
                                                                            window.pageYOffset -
                                                                            77 -
                                                                            navH -
                                                                            (heading
                                                                                ? 4
                                                                                : 0);
                                                                        const scroller =
                                                                            document.scrollingElement ??
                                                                            document.documentElement;
                                                                        const prev =
                                                                            scroller
                                                                                .style
                                                                                .scrollBehavior;
                                                                        scroller.style.scrollBehavior =
                                                                            "auto";
                                                                        window.scrollTo(
                                                                            0,
                                                                            Math.max(
                                                                                0,
                                                                                Math.round(
                                                                                    y
                                                                                )
                                                                            )
                                                                        );
                                                                        scroller.style.scrollBehavior =
                                                                            prev;
                                                                        try {
                                                                            window.history.replaceState(
                                                                                window
                                                                                    .history
                                                                                    .state,
                                                                                "",
                                                                                cleanPath
                                                                            );
                                                                        } catch (_) {}
                                                                        return true;
                                                                    };
                                                                let attempts = 0;
                                                                const tick =
                                                                    () => {
                                                                        if (
                                                                            !align() &&
                                                                            attempts <
                                                                                60
                                                                        ) {
                                                                            attempts += 1;
                                                                            window.setTimeout(
                                                                                tick,
                                                                                50
                                                                            );
                                                                            return;
                                                                        }
                                                                        [
                                                                            120,
                                                                            300,
                                                                            700,
                                                                            1200,
                                                                        ].forEach(
                                                                            ms =>
                                                                                window.setTimeout(
                                                                                    align,
                                                                                    ms
                                                                                )
                                                                        );
                                                                    };
                                                                const normalize =
                                                                    p =>
                                                                        (
                                                                            p ||
                                                                            "/"
                                                                        )
                                                                            .replace(
                                                                                /\/+$/,
                                                                                ""
                                                                            )
                                                                            .replace(
                                                                                /\/index$/,
                                                                                ""
                                                                            ) ||
                                                                        "/";
                                                                if (
                                                                    normalize(
                                                                        window
                                                                            .location
                                                                            .pathname
                                                                    ) ===
                                                                    normalize(
                                                                        cleanPath
                                                                    )
                                                                ) {
                                                                    tick();
                                                                    return;
                                                                }
                                                                try {
                                                                    sessionStorage.setItem(
                                                                        "tunafe-scroll-to",
                                                                        hash
                                                                    );
                                                                } catch (_) {}
                                                                window.location.assign(
                                                                    cleanPath
                                                                );
                                                            }}
                                                        >
                                                            {item.text}
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        ) : null;
                                    }
                                )}
                            </Col>
                            <Col id="mobileMenu" className={styles.mobileMenu}>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="menuIcon"
                                        variant="link"
                                        className={styles.menuIcon}
                                    >
                                        <FaBars />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu
                                        id="menu"
                                        align="end"
                                        className={styles.mobileMenuDropdown}
                                    >
                                        {content.frontmatter.menu.map(
                                            (section, index) => (
                                                <HeaderLink
                                                    key={index}
                                                    link={section.link}
                                                    context={section.text}
                                                />
                                            )
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                </header>
            )}
        </Location>
    );
};

export default Header;
