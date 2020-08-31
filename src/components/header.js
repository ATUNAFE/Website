import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

import "./concept.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--light)`,
      padding: '0.5rem',
      borderBottomStyle: 'solid',
      borderBottomWidth: '0.2rem',
      borderColor: 'var(--green)',
    }}
  >
    <div 
      style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
      }}
    >
      {/* acho que há uma forma de isolar estes elementos do header como se fossem componentes que extendem o Link*/}
        <Link
          to="/"
        >
          <Image filename="LogofTUNAFE.png" style={{margin:'0', height:'50'}}/>
        </Link>

        <Link
          to="/"
          style={{
            color: 'var(--dark-grey)',
            textDecoration: `none`,
          }}
        >
          Sobre Nós
        </Link>

        <Link
          to="/"
          style={{
            color: 'var(--dark-grey)',
            textDecoration: `none`,
          }}
        >
          Eventos
        </Link>

        <Link
          to="/"
          style={{
            color: 'var(--dark-grey)',
            textDecoration: `none`,
          }}
        >
          Música
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
