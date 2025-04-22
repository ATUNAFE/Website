import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import noPicture from "../../images/SemFoto.png";

// Import all static instruments icons
import acordeao from "../../images/Instrumentos/AcordeaoCor.png";
import bandolim from "../../images/Instrumentos/BandolimCor.png";
import cavaquinho from "../../images/Instrumentos/CavaquinhoCor.png";
import contrabaixo from "../../images/Instrumentos/ContrabaixoCor.png";
import estandarte from "../../images/Instrumentos/EstandarteCor.png";
import flauta from "../../images/Instrumentos/FlautaCor.png";
import guitarra from "../../images/Instrumentos/GuitarraCor.png";
import pandeireta from "../../images/Instrumentos/PandeiretaCor.png";
import percussao from "../../images/Instrumentos/PercussaoCor.png";
import violino from "../../images/Instrumentos/ViolinoCor.png";
import magister from "../../images/Instrumentos/MagisterCor.png";

const instrumentImages = {
    acordeao,
    bandolim,
    cavaquinho,
    contrabaixo,
    estandarte,
    flauta,
    guitarra,
    pandeireta,
    percussao,
    violino,
    magister
};

const MemberCard = ({ name, nameC, course, godmother, picture, instruments }) => {
    return (
        <Card
            className="mb-3 border-0"
            style={{
                backgroundColor: "var(--dark-neutral)",
                color: "var(--light-neutral)",
            }}
        >
            <Row className="g-0 align-items-center">
                <Col xs={12} sm={2} className="d-flex justify-content-center align-items-center mb-3 mb-sm-0">
                    <Card.Img
                        variant="top"
                        className="rounded-0"
                        src={picture || noPicture}
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "contain"
                        }}
                    />
                </Col>

                <Col xs={12} sm={10} className="ps-sm-4">
                    <Card.Body className="d-flex flex-column h-100 text-break">
                        <Card.Title className="fw-bold">{name}</Card.Title>
                        <div className="mt-auto">
                            <Card.Text className="mb-2" style={{
                                fontSize: "12px"
                            }}>Nome: {nameC || "-"}</Card.Text>
                            <Card.Text className="mb-2" style={{
                                fontSize: "12px"
                            }}>Curso: {course || "-"}</Card.Text>
                            <Card.Text className="mb-2" style={{
                                fontSize: "12px"
                            }}>Madrinha: {godmother || "-"}</Card.Text>

                            <div className="d-flex gap-2 mt-3 flex-wrap">
                                {instruments?.map((instrument, index) => (
                                    <Image
                                        key={index}
                                        src={instrumentImages[instrument]}
                                        alt={instrument}
                                        title={instrument}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            objectFit: "contain"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </Card.Body>
                </Col>
            </Row>


        </Card>
    );
};

export default MemberCard;
