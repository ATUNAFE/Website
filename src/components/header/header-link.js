import React from "react";

import "../../style/concept.css";
import { Link } from "gatsby";

const HeaderLink = ({ link, context, style }) => (
    <Link className="headerLink" to={link} style={style}>
        <h5 style={{ fontWeight: "lighter" }}>{context}</h5>
    </Link>
);

export default HeaderLink;
