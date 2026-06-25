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
                        title { text }
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
                        title { text }
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
                color: repertoire.frontmatter.color,
                overflow: "hidden"
            }}
        >
            <CustomImage
                src={repertoire.frontmatter.watermark}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "45%",
                    opacity: 0.06,
                    filter: "grayscale(100%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <Container className="py-5" style={{ position: "relative", zIndex: 2 }}>
                <Row className="mb-3">
                    <Col className="text-center text-md-start">
                        <h2 style={{ fontWeight: "bold" }}>{repertoire.frontmatter.title.text}</h2>
                    </Col>
                </Row>
                <Row className="mb-5 justify-content-center justify-content-md-start">
                    <Col xs={12} md={10} lg={8} className="text-center text-md-start">
                        <div style={{ textAlign: "justify" }} className="text-md-start">
                            <div dangerouslySetInnerHTML={{ __html: repertoire.html }} />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center justify-content-md-start">
                    <Col xs={12} md={10} lg={8}>
                        {songs.map((song, index) => (
                            <div key={index} style={{ borderBottom: `1px solid ${repertoire.frontmatter.color}22` }}>
                                <CollapsibleSection 
                                    color={repertoire.frontmatter.color} 
                                    backgroundColor="transparent"
                                    title={song.frontmatter.title.text} 
                                    enabled={true}
                                >
                                    <div className="ps-3 py-3">
                                        <p><strong>{song.frontmatter.author}</strong></p>
                                        <div style={{ textAlign: "justify" }}>
                                            <div dangerouslySetInnerHTML={{ __html: song.html }} />
                                        </div>
                                    </div>
                                </CollapsibleSection>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Repertoire;
