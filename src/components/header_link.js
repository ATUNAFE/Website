import React from "react"

import "./concept.css"
import { Link } from "gatsby";

const HeaderLink = ({link, context, style}) => (
    <Link className="headerLink" to={link} style={style}>
        {context}
    </Link>
)

export default HeaderLink;