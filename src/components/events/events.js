import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Event from "./event";

const Events = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            events: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/data-events/"}}}) {
                nodes {
                    frontmatter {
                        id
                        title { text }
                        lightTheme { watermark color backgroundColor }
                        darkTheme { watermark color backgroundColor }
                        events
                    }
                }
            }
            allEvents: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/events-/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title { text }
                        date
                        image
                    }
                }
            }
        }
    `);

    const events = data.events.nodes.find((node) => node.frontmatter.id === id);

    if (!events) return <p>⚠️ Content not found for “{id}”.</p>;

    const eventsData = events.frontmatter.events.map((eventId) =>
        data.allEvents.nodes.find((event) => event.frontmatter.id === eventId)
    );

    return (
        <div id={id}>
            {eventsData.map((event, index) => {
                const theme = index % 2 === 0 ? events.frontmatter.lightTheme : events.frontmatter.darkTheme;
                return <Event key={index} event={event} theme={theme} />;
            })}
        </div>
    );
};

export default Events;
