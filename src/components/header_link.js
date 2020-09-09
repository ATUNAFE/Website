import React from "react"

import "./concept.css"
import { Link } from "gatsby";

const HeaderLink = ({link, context}) => (
    <Link className="headerLink" to={link}>
        {context}
    </Link>
)

export default HeaderLink;