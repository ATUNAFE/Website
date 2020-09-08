import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from '@material-ui/core/Grid';

import Image from "./image"

import Menu from "./menu"

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
    <Grid container spacing={3}>
      <Grid container item xs 
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* <p style={{color: 'var(--dark-grey)', fontWeight: 'bolder', fontSize: '2rem', margin:'0'}}>A TUNAFE</p> */}
      </Grid>
      <Grid container item xs 
        direction="row"
        justify="center"
        alignItems="center"
      >
          <Link
              to="/"
          >
              <Image filename="LogofTUNAFE.png" style={{margin:'0', minHeight:'4rem' , minWidth:'5.5rem', maxHeight:'4rem', maxWidth:'5.5rem',}}/>
          </Link>
      </Grid>
      <Menu/>
    </Grid>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
