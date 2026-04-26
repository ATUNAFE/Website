import React, { useState } from "react";
import { Card, Collapse, Row, Col } from "react-bootstrap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsibleSection = ({ title, color, backgroundColor, children, enabled = true, defaultOpen = true}) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <Card className="mb-4" style={{ backgroundColor: "var(--mid-green)", border: "none" }}>
            <Card.Header
                onClick={() => enabled && setOpen(!open)}
                style={{
                    cursor: enabled ? "pointer" : "default",
                    backgroundColor,
                    color,
                    borderBottom: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}
            >
                <h3 className="mb-0" style={{ fontSize: "1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    {title}
                    {enabled && (
                        open ? (
                            <FaAngleUp style={{ fontSize: "1.25rem" }} />
                        ) : (
                            <FaAngleDown style={{ fontSize: "1.25rem" }} />
                        )
                    )}
                </h3>
            </Card.Header>

            <Collapse in={open}>
                <div>
                    <Card.Body className="py-3">
                        <Row className="g-4">
                            {React.Children.map(children, (child, index) => (
                                <Col xs={12} key={index}>
                                    {child}
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
};

export default CollapsibleSection;
