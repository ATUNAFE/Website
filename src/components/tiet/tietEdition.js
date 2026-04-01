import React from "react";
import CustomImage from "../images/image";
import { Container, Row, Col } from "react-bootstrap";

const PARTICIPANTS_TITLE = "Tunas Participantes";
const EXTRAS_TITLE = "Tunas Extra-Concurso";
const GUESTS_TITLE = "Grupos Convidados";
const AWARDS_TITLE = "Prémios Atribuídos";
const JURY_TITLE = "Júri";
const HOST_TITLE = "Apresentação";

const TietEdition = ({ edition, theme }) => {
    return (
        <div style={{
            color: theme.color,
            backgroundColor: theme.backgroundColor
        }}
        >
            <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
                <Row>
                    <h3>{edition.frontmatter.title.text}</h3>
                </Row>
                <Row>
                    <Col
                        xs={8}
                        md={5}
                        className="d-flex flex-column justify-content-center align-items-center py-4"
                    >
                        <CustomImage src={edition.frontmatter.image} />
                        <p className="mt-4 mb-0 fw-bold">{edition.frontmatter.date}</p>
                        <p className="fw-bold">{edition.frontmatter.local}</p>

                    </Col>
                    <Col
                        xs={10}
                        md={6}
                        className="d-flex flex-column justify-content-center align-items-center w-80"
                    >
                        <div>
                            <div className="mb-4">
                                <p className="mb-2 fw-bold">{PARTICIPANTS_TITLE}</p>
                                {edition.frontmatter.participants.map((participant, index) => (
                                    <p key={index} className="mb-0">{participant}</p>
                                ))}
                            </div>

                            <div className="mb-4">
                                <p className="mb-2 fw-bold">{EXTRAS_TITLE}</p>
                                {edition.frontmatter.extras.map((extra, index) => (
                                    <p key={index} className="mb-0">{extra}</p>
                                ))}
                            </div>

                            {edition.frontmatter?.guests &&
                                <div className="mb-4">
                                    <p className="mb-2 fw-bold">{GUESTS_TITLE}</p>
                                    {edition.frontmatter.guests.map((guest, index) => (
                                        <p key={index} className="mb-0">{guest}</p>
                                    ))}
                                </div>
                            }

                            <div className="mb-4">
                                <p className="mb-2 fw-bold">{AWARDS_TITLE}</p>
                                {edition.frontmatter.awards.map((award, index) => (
                                    <p key={index} className="mb-0">{award}</p>
                                ))}
                            </div>

                            <div className="mb-4">
                                <p className="mb-2 fw-bold">{JURY_TITLE}</p>
                                {edition.frontmatter.jury.map((jury, index) => (
                                    <p key={index} className="mb-0">{jury}</p>
                                ))}
                            </div>

                            <div className="mb-4">
                                <p className="mb-2 fw-bold">{HOST_TITLE}</p>
                                {edition.frontmatter.host.map((host, index) => (
                                    <p key={index} className="mb-0">{host}</p>
                                ))}
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TietEdition;
