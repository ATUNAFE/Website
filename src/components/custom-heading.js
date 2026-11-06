import React from "react";
import * as styles from "../style/custom-heading.module.css";

const CustomHeading = ({
    children,
    background = "light",
    ruleColor,
    className = "",
}) => {
    const backgroundClass = !ruleColor
        ? {
              dark: styles.onDarkBackground,
              green: styles.onGreenBackground,
              light: styles.onLightBackground,
          }[background] || styles.onLightBackground
        : null;

    return (
        <h3
            className={`${styles.title}${
                backgroundClass ? ` ${backgroundClass}` : ""
            }${className ? ` ${className}` : ""}`}
            style={ruleColor ? { "--rule-color": ruleColor } : {}}
        >
            {children}
        </h3>
    );
};

export default CustomHeading;
