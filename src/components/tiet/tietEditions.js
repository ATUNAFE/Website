import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import TietEdition from "./tietEdition";

const TietEditions = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            tietEditions: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/editions-tiet/"}}}) {
                nodes {
                    frontmatter {
                        id
                        title { text }
                        lightTheme { color backgroundColor }
                        darkTheme { color backgroundColor }
                        editions
                    }
                }
            }
            allEditions: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/edition-/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title { text }
                        date
                        local
                        image
                        participants
                        extras
                        guests
                        awards
                        jury
                        host
                    }
                }
            }
        }
    `);

    const editions = data.tietEditions.nodes.find((node) => node.frontmatter.id === id);

    if (!editions) return <p>⚠️ Content not found for “{id}”.</p>;

    const editionsData = editions.frontmatter.editions.map((editionId) =>
        data.allEditions.nodes.find((edition) => edition.frontmatter.id === editionId)
    );

    return (
        <div id={id}>
            {editionsData.map((edition, index) => {
                const theme = index % 2 === 0 ? editions.frontmatter.lightTheme : editions.frontmatter.darkTheme;
                return <TietEdition key={index} edition={edition} theme={theme} />;
            })}
        </div>
    );
};

export default TietEditions;
