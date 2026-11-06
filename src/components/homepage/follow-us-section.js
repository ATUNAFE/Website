import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "../../style/follow-us-section.module.css";

const FollowUsSection = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/followUsSection/" } } }
            ) {
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

    const content = data.allMarkdownRemark.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!content) return <p>⚠️ Content not found for “{id}”.</p>;

    const to = content.frontmatter.button.link;
    const isExternal = /^https?:\/\//.test(to);
    const label = content.frontmatter.button.text.replace(/\.$/, "");

    return (
        <div
            id={id}
            style={{
                backgroundColor: "var(--light-engineer)",
                color: "var(--light-neutral)",
            }}
        >
            <Container className="py-4 py-md-5">
                <p
                    className="m-0 text-center mx-auto"
                    style={{
                        fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
                        lineHeight: 1.5,
                        maxWidth: "860px",
                    }}
                >
                    {content.frontmatter.title.text}{" "}
                    {isExternal ? (
                        <a href={to} className={styles.rehearsalsLink}>
                            {label}!
                        </a>
                    ) : (
                        <Link to={to} className={styles.rehearsalsLink}>
                            {label}!
                        </Link>
                    )}
                </p>
            </Container>
        </div>
    );
};

export default FollowUsSection;
