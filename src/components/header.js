import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

import HeaderLink from "./header_link"

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
        flex: 1,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '0 2rem'
      }}
    >
      <div 
        style={{
          flexBasis:'54%',
          display:'flex',
          justifyContent:'flex-end'
        }}
      >
        <Link
            to="/"
        >
            <Image filename="LogofTUNAFE.png" style={{margin:'0', minHeight:'4rem' , minWidth:'5.5rem', maxHeight:'4rem', maxWidth:'5.5rem',}}/>
        </Link>
      </div>
        
      <div
        style={{
          padding:'1rem 0',
          flexBasis: '30%',
          display:'flex',
          justifyContent:'space-around'
        }}
      >
        <HeaderLink link="/" context="Sobre Nós"/>
        <HeaderLink link="/" context="Eventos"/>
        <HeaderLink link="/" context="Música"/>
      </div>
        
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
