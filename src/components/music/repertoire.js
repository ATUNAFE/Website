import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "../images/image";
import CollapsibleSection from "../members/collapsible-section";
import CustomHeading from "../custom-heading";
import * as styles from "../../style/repertoire.module.css";

const Repertoire = ({ id }) => {
    const data = useStaticQuery(graphql`
        {
            repertoire: allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/repertoire/" } } }
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
                        songs
                    }
                }
            }
            allSongs: allMarkdownRemark(
                filter: { frontmatter: { id: { regex: "/music-/" } } }
            ) {
                nodes {
                    html
                    frontmatter {
                        id
                        title {
                            text
                        }
                        author
                        description
                    }
                }
            }
        }
    `);

    const repertoire = data.repertoire.nodes.find(
        node => node.frontmatter.id === id
    );

    if (!repertoire) {
        return <p>⚠️ Content not found for “{id}”.</p>;
    }

    const songs = repertoire.frontmatter.songs.map(songId =>
        data.allSongs.nodes.find(song => song.frontmatter.id === songId)
    );

    return (
        <div
            id={id}
            className="repertoire"
            style={{
                position: "relative",
                backgroundColor: repertoire.frontmatter.backgroundColor,
                color: repertoire.frontmatter.color,
            }}
        >
            <CustomImage
                src={repertoire.frontmatter.watermark}
                sizes="30vw"
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

            <Container
                className={styles.container}
                style={{
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Row>
                    <Col>
                        <CustomHeading background="green">
                            {repertoire.frontmatter.title.text}
                        </CustomHeading>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <div className="repertoire-intro">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: repertoire.html,
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row
                    className="justify-content-start"
                    style={{
                        color: repertoire.frontmatter.color,
                    }}
                >
                    <Col xs={12}>
                        <div className="repertoire-songs">
                            {songs.map((song, index) =>
                                song ? (
                                    <CollapsibleSection
                                        key={song.frontmatter.id}
                                        className={styles.song}
                                        subtitle={song.frontmatter.author}
                                        summary={song.frontmatter.description}
                                        color={repertoire.frontmatter.color}
                                        backgroundColor={
                                            repertoire.frontmatter
                                                .backgroundColor
                                        }
                                        title={song.frontmatter.title.text}
                                        enabled={true}
                                        defaultOpen={false}
                                    >
                                        <div
                                            className={`repertoire-lyrics ${styles.lyrics}`}
                                            style={{ whiteSpace: "pre-line" }}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: song.html,
                                                }}
                                            />
                                        </div>
                                    </CollapsibleSection>
                                ) : (
                                    <p key={index} role="alert">
                                        Não foi possível carregar a música “
                                        {repertoire.frontmatter.songs[index]}”.
                                    </p>
                                )
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Repertoire;
