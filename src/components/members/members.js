import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MemberCard from "./member-card";
import CollapsibleSection from "./collapsible-section";
import membersBackground from "../../images/IMG_4101.jpg"
import iconTunafe from "../../images/Instrumentos/Magister.png";
import Layout from "../layout";
import Banner from "../banner";


const Members = ({ subtitle, sections }) => {

    const renderMembers = (members) => (
        <div className="d-flex flex-column gap-3">
            {members.map((member, index) => (
                <MemberCard
                    key={index}
                    name={member.name}
                    nameC={member.nameC}
                    course={member.course}
                    godmother={member.godmother}
                    picture={member.picture}
                    instruments={member.instruments}
                />
            ))}
        </div>
    );


    return (
        <Layout>
            <Banner
                title="Sobre Nós"
                subtitle={subtitle}
                icon={iconTunafe}
                backgroundImage={membersBackground}
                backgroundColor="var(--light-green)"
             />
            <div className="p-6 pt-2" style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)"
            }}>
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
        </Layout>
    );
};

export default Members;
