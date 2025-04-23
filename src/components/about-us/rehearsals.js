import React from "react";
import { Container, Row, Image } from "react-bootstrap";

import rehearsalImage from "../../images/Páginas/EnsaiosP.png";

const Rehearsals = ({ weekDays, rehearsalRoom, tunaRoom, startTime, finishTime, html }) => (
    <div style={{
        position: "relative",
        backgroundColor: "var(--light-neutral)"
    }}>
        <Image
            src={rehearsalImage}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20%",
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
        <Container className="py-4" style={{ position: "relative", zIndex: 2 }}>
            <Row>
                <h3>Ensaios</h3>
            </Row>
            <Row>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Row>
            <Row className="justify-content-center align-items-center my-4">
                <h2 className="text-center">
                    <span>{`${weekDays} das ${startTime} às ${finishTime}`}</span>
                </h2>
            </Row>
            <Row className="justify-content-center align-items-center mb-4" style={{ fontWeight: "bold" }}>
                <h2 className="text-center">
                    <span>Aparece na sala </span>
                    <span style={{ color: "var(--light-engineer)"}}>{rehearsalRoom}</span>
                    <span> ou na </span>
                    <span style={{ color: "var(--light-engineer)"}}>{tunaRoom}</span>
                </h2>
            </Row>
            <Row className="justify-content-center align-items-center mb-4">
                <h2 className="text-center">
                    <span>Esperamos por ti!</span>
                </h2>
            </Row>
        </Container>
    </div>
);

export default Rehearsals;