import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsibleSection = ({ title, children, enabled = true }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="mb-6">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center mt-2"
            >
                <h4 style={{ display: "inline-block", fontSize: "1.25rem" }}>
                    {title}
                </h4>
                {enabled && (
                    open ? (
                        <FaAngleUp
                            className="ms-2"
                            style={{ fontSize: "1.25rem", verticalAlign: "middle", cursor: "pointer" }}
                        />
                    ) : (
                        <FaAngleDown
                            className="ms-2"
                            style={{ fontSize: "1.25rem", verticalAlign: "middle", cursor: "pointer" }}
                        />
                    )
                )}
            </div>

            {open && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children}
                </div>
            )}
        </div>
    );
};

export default CollapsibleSection;
