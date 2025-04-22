import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";

import MemberCard from "../components/member-card";
import CollapsibleSection from "../components/collapsible-section";
import membersBackground from "../images/IMG_4101.jpg"
import iconTunafe from "../images/Instrumentos/Magister.png";
import Layout from "../components/layout";
import Banner from "../components/banner";

const formatInstruments = (instruments) =>
    instruments.split(",")
        .map(instrument =>
            instrument.trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
        );

const Members = ({ data }) => {
    const { magister, mestreTunas, tunas, caloiras } = data;

    const renderMembers = (group) => (
        <div className="d-flex flex-column gap-3">
            {group.nodes.map((member, index) => (
                <MemberCard
                    key={index}
                    name={member.frontmatter.name}
                    nameC={member.frontmatter.nameC}
                    course={member.frontmatter.course}
                    godmother={member.frontmatter.godmother}
                    picture={member.frontmatter.picture}
                    instruments={formatInstruments(member.frontmatter.instruments)}
                />
            ))}
        </div>
    );


    return (
        <Layout>
            <Banner
                title="Sobre Nós"
                subtitle="Atualmente"
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
                            <CollapsibleSection title="Magister">
                                {renderMembers(magister)}
                            </CollapsibleSection>

                            <CollapsibleSection title="Mestre-Tunas">
                                {renderMembers(mestreTunas)}
                            </CollapsibleSection>

                            <CollapsibleSection title="Tunas">
                                {renderMembers(tunas)}
                            </CollapsibleSection>

                            <CollapsibleSection title="Caloiras">
                                {renderMembers(caloiras)}
                            </CollapsibleSection>

                            <CollapsibleSection title="Aprendizes..." enabled={false} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Members;

export const query = graphql`
query MembersQuery {
  magister: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/magister/"}}
  ) {
    nodes {
      frontmatter {
        date
        name
        nameC
        course
        godmother
        instruments
        picture
      }
    }
  }
  mestreTunas: allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/mestreTunas/" } }
    sort: { frontmatter: { date: ASC } }
  ) {
    nodes {
      frontmatter {
        date
        name
        nameC
        course
        godmother
        instruments
        picture
      }
    }
  }
  tunas: allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/tunas/" } }
    sort: { frontmatter: { date: ASC } }
  ) {
    nodes {
      frontmatter {
        date
        name
        nameC
        course
        godmother
        instruments
        picture
      }
    }
  }
  caloiras: allMarkdownRemark(
    filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/caloiras/" } }
    sort: { frontmatter: { date: ASC } }
  ) {
    nodes {
      frontmatter {
        date
        name
        nameC
        course
        godmother
        instruments
        picture
      }
    }
  }
}
`;
