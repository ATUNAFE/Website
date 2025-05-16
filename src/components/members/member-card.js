import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { IMAGE_FILENAMES } from "../../utils/constants";
import CustomImage from "../images/image";

const MemberCard = ({ name, nameC, course, godmother, image, instruments }) => {
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
                        src={image || IMAGE_FILENAMES.pages.semFoto}
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
                                    <CustomImage
                                        key={index}
                                        src={IMAGE_FILENAMES.instruments.color[instrument]}
                                        alt={instrument}
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
