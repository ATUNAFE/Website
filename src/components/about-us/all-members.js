import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

export const allMembersQuery = graphql`
    query HistoryQuery {
        markdownRemark(frontmatter: { fileName: { eq: "todosMembros" } }) {
            html
        }
    }
`;

const AllMembers = () => {
    const { markdownRemark } = useStaticQuery(allMembersQuery);
    console.log("[AllMembers] html:");
    console.log(markdownRemark);

    return (
        <div style={{
            backgroundColor: "var(--dark-neutral)",
            color: "var(--light-neutral)"
        }}>
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>Membros</h3>
                </Row>
                
                <Row className="my-4">
                    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
                </Row>

                <Row>
                    <Col xs={9} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <Button className="custom-button w-80 d-flex flex-column justify-content-center align-items-center">
                            Atualmente
                        </Button>
                    </Col>

                    <Col xs={9} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <Button className="custom-button w-80 d-flex flex-column justify-content-center align-items-center">
                            Sempre Tunafas
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMembers;