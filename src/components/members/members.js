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
            filter: {frontmatter: {id: {regex: "/activeMembers-magister/"}}}
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
            filter: {frontmatter: {id: {regex: "/activeMembers-mestreTuna/"}}}
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
            filter: {frontmatter: {id: {regex: "/inactiveMembers-mestreTuna/"}}}
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
            mestreTunas: data.activeMestreTunas
        };
    } else if (id === MEMBERS_ID.inactive) {
        content = {
            mestreTunas: data.inactiveMestreTunas
        };
    } else {
        content = null;
    }
    console.log("MEMBERS CONTENT:");
    console.log(content);

    if (!content) return <p>⚠️ Content not found for footer”.</p>;

    const sections = [
        {
            collapsible: true,
            members: formatMembers(content.magister.nodes),
            title: "Magister"
        },
        {
            collapsible: true,
            members: formatMembers(content.mestreTunas.nodes),
            title: "Mestre-Tunas"
        },
        {
            collapsible: false,
            title: "Aprendizes..."
        }
    ];


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
                            <CollapsibleSection key={index} title={section.title} enabled={section.collapsible}>
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
