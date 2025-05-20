import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MemberCard from "./member-card";
import CollapsibleSection from "./collapsible-section";
import { useStaticQuery, graphql } from "gatsby";
import { formatMembers } from "../../utils/utils";

const MEMBERS_ID = {
    active: "members-activeMembers",
    inactive: "members-inactiveMembers"
};


const Members = ({ id }) => {

    const renderMembers = (members) => (
        <div className="d-flex flex-column gap-3">
            {members.map((member, index) => (
                <MemberCard
                    key={index}
                    name={member.name}
                    nameC={member.nameC}
                    course={member.course}
                    godmother={member.godmother}
                    image={member.image}
                    instruments={member.instruments}
                />
            ))}
        </div>
    );

    const data = useStaticQuery(graphql`
        {
        magister: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/^activeMembers-magister-/"}}}
        ) {
            nodes {
            frontmatter {
                id
                title {
                    text
                }
                date
                name
                nameC
                course
                godmother
                instruments
                image
            }
        }
    }
        activeMestreTunas: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/^activeMembers-mestreTuna-/"}}}
        ) {
            nodes {
                frontmatter {
                    id
                    title {
                        text
                    }
                    date
                    name
                    nameC
                    course
                    godmother
                    instruments
                    image
                }
            }
        }
        activeTunas: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/^activeMembers-tuna-/"}}}
        ) {
            nodes {
                frontmatter {
                    id
                    title {
                        text
                    }
                    date
                    name
                    nameC
                    course
                    godmother
                    instruments
                    image
                }
            }
        }
        activeCaloiras: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/^activeMembers-caloira-/"}}}
        ) {
            nodes {
                frontmatter {
                    id
                    title {
                        text
                    }
                    date
                    name
                    nameC
                    course
                    godmother
                    instruments
                    image
                }
            }
        }
            fundadoras: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/inactiveMembers-fundadora-/"}}}
        ) {
            nodes {
            frontmatter {
                id
                title {
                    text
                }
                date
                name
                nameC
                course
                godmother
                instruments
                image
            }
        }
    }   
        inactiveMestreTunas: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/inactiveMembers-mestreTuna-/"}}}
        ) {
            nodes {
            frontmatter {
                id
                title {
                    text
                }
                date
                name
                nameC
                course
                godmother
                instruments
                image
            }
        }
    }
    inactiveTunas: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/inactiveMembers-tuna-/"}}}
        ) {
            nodes {
            frontmatter {
                id
                title {
                    text
                }
                date
                name
                nameC
                course
                godmother
                instruments
                image
            }
        }
    }
        inactiveCaloiras: allMarkdownRemark(
            filter: {frontmatter: {id: {regex: "/inactiveMembers-caloira-/"}}}
        ) {
            nodes {
            frontmatter {
                id
                title {
                    text
                }
                date
                name
                nameC
                course
                godmother
                instruments
                image
            }
        }
    }
            
    }
    `);

    let content = {};

    if (id === MEMBERS_ID.active) {
        content = {
            magister: data.magister,
            mestreTunas: data.activeMestreTunas,
            tunas: data.activeTunas,
            caloiras: data.activeCaloiras
        };
    } else if (id === MEMBERS_ID.inactive) {
        content = {
            fundadoras: data.fundadoras,
            mestreTunas: data.inactiveMestreTunas,
            tunas: data.inactiveTunas,
            caloiras: data.inactiveCaloiras
        };
    } else {
        content = null;
    }

    if (!content) return <p>⚠️ Content not found for footer”.</p>;

    let sections = [];

    if (content?.magister) {
        sections.push({
            collapsible: true,
            members: formatMembers(content.magister.nodes),
            title: "Magister"
        });
    }

    if (content?.fundadoras) {
        sections.push({
            collapsible: true,
            members: formatMembers(content.fundadoras.nodes),
            title: "Fundadoras"
        });
    }

    if (content?.mestreTunas) {
        sections.push({
            collapsible: true,
            members: formatMembers(content.mestreTunas.nodes),
            title: "Mestre-Tunas"
        });
    }

    if (content?.tunas) {
        sections.push({
            collapsible: true,
            members: formatMembers(content.tunas.nodes),
            title: "Tunas"
        });
    }

    if (content?.caloiras) {
        sections.push({
            collapsible: true,
            members: formatMembers(content.caloiras.nodes),
            title: "Caloiras"
        });
    }

    return (
        <div
            id={id}
            className="p-6 pt-2"
            style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)"
            }}
        >
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        {sections.map((section, index) =>
                            <CollapsibleSection key={index} title={section.title} color="var(--light-neutral)" backgroundColor="var(--dark-neutral)" enabled={section.collapsible}>
                                {renderMembers(section.members || [])}
                            </CollapsibleSection>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Members;
