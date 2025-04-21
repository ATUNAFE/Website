import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";

import MemberCard from "../components/MemberCard";
import CollapsibleSection from "../components/CollapsibleSection";
import Header from "../components/header";
import membersBackground from "../images/IMG_4101.jpg"
import iconTunafe from "../images/Instrumentos/Magister.png";

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
        <>
            <Header />
            <div
                style={{
                    position: "relative",
                    height: "55vh",  // Set the container to be half the viewport height (adjustable)
                    overflow: "hidden",  // Hide the top half of the image
                    width: "100%",  // Ensure it takes the full width
                }}
            >
                <Image
                    src={membersBackground}
                    alt="Members Background"
                    fluid
                    style={{
                        objectFit: "cover",  // Ensures the image covers the entire container
                        objectPosition: "bottom",  // Make sure the bottom part is visible
                        height: "100%",  // Ensure the image fills the height of the container
                        width: "100%",  // Ensure the image fills the width of the container
                    }}
                />

                {/* Title and Icon Container */}
                <div
                    className="position-absolute w-100"
                    style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        padding: "0 20px",
                    }}
                >
                    <Container>
                        <Row className="align-items-center justify-content-center text-center">
                            <Col xs="auto" className="d-flex align-items-center gap-3">
                                <Image
                                    src={iconTunafe} // replace with your actual path
                                    alt="TUNAFE"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                        color: "var(--light-neutral)",
                                        margin: 0,
                                    }}
                                >
                                    Sobre Nós
                                </h3>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
            <Container
                fluid
                className="d-flex justify-content-center align-items-center p-5"
                style={{ backgroundColor: "var(--light-green)", color: "var(--light-neutral)" }}

            >
                <Row className="w-100 text-center">
                    <Col>
                        <h4>
                            Atualmente
                        </h4>
                    </Col>
                </Row>
            </Container>
            <div className="p-6 pt-2" style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)"
            }}>
                <Container>
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

                            <CollapsibleSection title="Aprendizes..." enabled={false}>
                            </CollapsibleSection>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
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
