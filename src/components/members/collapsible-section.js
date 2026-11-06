import React, { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsibleSection = ({
    title,
    subtitle,
    summary,
    color,
    backgroundColor,
    children,
    className = "",
    compact = false,
    enabled = true,
    defaultOpen = true,
}) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <Card
            className={`${compact ? "mb-2" : "mb-4"} ${className}`}
            style={{ backgroundColor: "transparent", border: "none" }}
        >
            <Card.Header
                as={enabled ? "button" : "div"}
                type={enabled ? "button" : undefined}
                onClick={() => enabled && setOpen(!open)}
                aria-expanded={enabled ? open : undefined}
                style={{
                    cursor: enabled ? "pointer" : "default",
                    backgroundColor,
                    color,
                    border: "none",
                    borderBottom: "1px solid rgba(240, 240, 240, 0.12)",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    padding: "0.85rem 0",
                    width: "100%",
                    textAlign: "left",
                }}
            >
                <div
                    className="collapsible-section-heading"
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.6rem",
                    }}
                >
                    <h3
                        className="mb-0"
                        style={{
                            fontSize: "1.2rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            margin: 0,
                        }}
                    >
                        {title}
                        {enabled &&
                            (open ? (
                                <FaAngleUp
                                    style={{ fontSize: "1.1rem", opacity: 0.8 }}
                                />
                            ) : (
                                <FaAngleDown
                                    style={{ fontSize: "1.1rem", opacity: 0.8 }}
                                />
                            ))}
                    </h3>
                    {subtitle ? (
                        <div className="collapsible-section-subtitle">
                            {subtitle}
                        </div>
                    ) : null}
                </div>
                {summary ? (
                    <div className="collapsible-section-summary">{summary}</div>
                ) : null}
            </Card.Header>

            <Collapse in={!enabled || open}>
                <div>
                    <Card.Body className="pt-4 pb-2 px-0">
                        {compact ? (
                            children
                        ) : (
                            <div
                                className="d-flex flex-column"
                                style={{ gap: "1rem" }}
                            >
                                {React.Children.map(
                                    children,
                                    (child, index) => (
                                        <div key={index}>{child}</div>
                                    )
                                )}
                            </div>
                        )}
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
};

export default CollapsibleSection;
