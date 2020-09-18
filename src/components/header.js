import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from '@material-ui/core/Grid';

import Image from "./image"

import Menu from "./menu"

const Header = () => (
  <header>
    <Grid container spacing={3} style={{margin:'0', padding:'0', width:'100%'}}>
      <Grid container item xs
        direction="row"
        justify="center"
        alignItems="center"
      >
      </Grid>
      <Grid container item xs 
        direction="row"
        justify="center"
        alignItems="center"
      >
          <Link
              to="/"
          >
              <Image filename="logofTUNAFE.png" style={{margin:'0', minHeight:'4rem' , minWidth:'5.5rem', maxHeight:'4rem', maxWidth:'5.5rem',}}/>
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
