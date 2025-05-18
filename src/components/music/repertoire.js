import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";
import CollapsibleSection from "../members/collapsible-section";

const Repertoire = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            repertoire: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/repertoire/"}}}) {
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
                        songs
                    }
                }
            }
            allSongs: allMarkdownRemark(filter: {frontmatter: {id: {regex: "/music-/"}}}) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        author
                    }
                }
            }
        }
    `);

    const repertoire = data.repertoire.nodes.find((node) => node.frontmatter.id === id);

    if (!repertoire) return <p>⚠️ Content not found for “{id}”.</p>;

    const songs = repertoire.frontmatter.songs.map((songId) =>
        data.allSongs.nodes.find((song) => song.frontmatter.id === songId)
    );

    return (
        <div
            id={id}
            style={{
                position: "relative",
                backgroundColor: repertoire.frontmatter.backgroundColor,
                color: repertoire.frontmatter.color
            }}
        >
            <CustomImage
                src={repertoire.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "30%",
                    opacity: 0.05,
                    filter: "grayscale(100%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{repertoire.frontmatter.title.text}</h3>
                </Row>
                <Row className="mb-4">
                    <div style={{ textAlign: "justify" }}>
                        <div dangerouslySetInnerHTML={{ __html: repertoire.html }} />
                    </div>
                </Row>
                <Row className="justify-content-start">
                    <Col xs={12} md={10} lg={8}>
                        {songs.map((song, index) =>
                            <CollapsibleSection key={index} color={repertoire.frontmatter.color} backgroundColor={repertoire.frontmatter.backgroundColor} title={song.frontmatter.title.text} enabled={true}>
                                <p>{song.frontmatter.author}</p>
                                <div style={{ textAlign: "justify" }}>
                                    <div dangerouslySetInnerHTML={{ __html: song.html }} />
                                </div>
                            </CollapsibleSection>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Repertoire