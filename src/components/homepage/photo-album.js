import React from "react";
import { Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

import MultiImageCarousel from "../carousels/multi-image-carousel";
import CustomHeading from "../custom-heading";
import * as styles from "../../style/photo-album.module.css";

const PhotoAlbum = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/photoAlbum/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        carousel
                        button {
                            text
                            link
                        }
                    }
                }
            }
        }
    `);

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    const to = content.frontmatter.button.link;
    const isExternal = /^https?:\/\//.test(to);

    return (
        <div
            id={id}
            style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            <Container className="py-5">
                <div className="d-flex align-items-end justify-content-between gap-3 mb-4 flex-wrap">
                    <CustomHeading
                        background="dark"
                        ruleColor="var(--light-engineer)"
                        className="mb-0"
                    >
                        {content.frontmatter.title?.text ||
                            "A TUNAFE pelo palco e pelo mundo"}
                    </CustomHeading>
                    {to && (
                        <a
                            href={to}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={`d-inline-flex align-items-center gap-2 text-nowrap ${styles.followLink}`}
                        >
                            {content.frontmatter.button.text}
                            <FaArrowRight
                                aria-hidden="true"
                                className={styles.arrowIcon}
                            />
                        </a>
                    )}
                </div>

                <MultiImageCarousel
                    images={content.frontmatter.carousel}
                    autoScroll
                />
            </Container>
        </div>
    );
};

export default PhotoAlbum;
