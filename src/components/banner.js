import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const Banner = (props) => {
  const backgroundQuery = useStaticQuery(graphql`
    query BackgroundQuery {
      data: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid (quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  
  const image = backgroundQuery.data.edges.find(n => {
    return n.node.relativePath.includes(props.picturePath);
  });

  if (!image) {
    return null;
  }

  return <BackgroundImage
          className="banner"
          fluid={{
            ...image.node.childImageSharp.fluid
          }}
          style={{height: '80vh', width: '100%'}}
        >
          OI PLEASE WORK
        </BackgroundImage>
}

export default Banner
