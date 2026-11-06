import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { IMAGE_FILENAMES, instrumentLabel } from "../../utils/constants";
import CustomImage from "../images/image";

const MemberCard = ({
    name,
    nameC,
    course,
    godmother,
    image,
    instruments,
    loading = "lazy",
}) => {
    const instrumentList = (instruments || []).filter(Boolean);

    return (
        <Card
            className="mb-0 border-0"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                color: "var(--light-neutral)",
                contentVisibility: "auto",
                containIntrinsicSize: "auto 200px",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <Row className="g-0 align-items-center">
                <Col
                    xs={12}
                    sm="auto"
                    className="d-flex justify-content-center align-items-center p-3 ps-sm-4"
                >
                    <div
                        style={{
                            width: "160px",
                            height: "160px",
                            flex: "0 0 160px",
                            borderRadius: "10px",
                            overflow: "hidden",
                            backgroundColor: "rgba(0, 0, 0, 0.18)",
                        }}
                    >
                        {image ? (
                            <Card.Img
                                variant="top"
                                className="rounded-0"
                                src={image}
                                alt={
                                    name
                                        ? `Fotografia de ${name}`
                                        : "Fotografia de membro"
                                }
                                width="160"
                                height="160"
                                loading={loading}
                                decoding="async"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        ) : (
                            <CustomImage
                                src={IMAGE_FILENAMES.pages.semFoto}
                                alt="Sem fotografia disponível"
                                loading={loading}
                                sizes="160px"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    padding: "10px",
                                }}
                                imgStyle={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    opacity: 0.75,
                                    borderRadius: "6px",
                                }}
                            />
                        )}
                    </div>
                </Col>

                <Col xs={12} sm className="ps-sm-3">
                    <Card.Body className="d-flex flex-column h-100 text-break py-3 pe-sm-4">
                        <Card.Title
                            className="fw-bold mb-2"
                            style={{ fontSize: "1.12rem" }}
                        >
                            {name}
                        </Card.Title>
                        <div className="mt-auto">
                            {nameC ? (
                                <Card.Text
                                    className="mb-1"
                                    style={{
                                        fontSize: "0.9rem",
                                        opacity: 0.92,
                                    }}
                                >
                                    <span style={{ opacity: 0.7 }}>Nome:</span>{" "}
                                    {nameC}
                                </Card.Text>
                            ) : null}
                            {course ? (
                                <Card.Text
                                    className="mb-1"
                                    style={{
                                        fontSize: "0.9rem",
                                        opacity: 0.92,
                                    }}
                                >
                                    <span style={{ opacity: 0.7 }}>Curso:</span>{" "}
                                    {course}
                                </Card.Text>
                            ) : null}
                            {godmother ? (
                                <Card.Text
                                    className="mb-0"
                                    style={{
                                        fontSize: "0.9rem",
                                        opacity: 0.92,
                                    }}
                                >
                                    <span style={{ opacity: 0.7 }}>
                                        Madrinha:
                                    </span>{" "}
                                    {godmother}
                                </Card.Text>
                            ) : null}

                            {instrumentList.length > 0 ? (
                                <div
                                    className="d-flex gap-2 mt-3 flex-wrap align-items-center"
                                    aria-label="Instrumentos"
                                >
                                    {instrumentList.map((instrument, index) => {
                                        const label =
                                            instrumentLabel(instrument);
                                        return (
                                            <span
                                                key={`${instrument}-${index}`}
                                                title={label}
                                            >
                                                <CustomImage
                                                    src={
                                                        IMAGE_FILENAMES
                                                            .instruments.color[
                                                            instrument
                                                        ]
                                                    }
                                                    alt={label}
                                                    variant="instrument"
                                                    sizes="28px"
                                                    style={{
                                                        width: "28px",
                                                        height: "28px",
                                                        objectFit: "contain",
                                                    }}
                                                    imgStyle={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default MemberCard;
