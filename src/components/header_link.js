import React from "react"

import "./concept.css"
import { Link } from "gatsby";

const HeaderLink = ({link, context}) => (
    <Link to={link}
        style={{textDecoration:'none', color: 'var(--dark-grey)', fontSize: 'larger'}}
    >
        {context}
    </Link>
)

export default HeaderLink;