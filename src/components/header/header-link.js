import React from "react";

import "../../style/concept.css";
import { Link } from "gatsby";

const HeaderLink = ({ link, context, style }) => (
    <Link
        className="headerLink mt-2"
        to={link}
        style={style}
        partiallyActive={link !== "/"}
    >
        <h5>{context}</h5>
    </Link>
);

export default HeaderLink;
